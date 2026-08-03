<?php
declare(strict_types=1);

function ensureContactsSchema(PDO $pdo): void
{
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS contacts (
            id INT NOT NULL AUTO_INCREMENT,
            full_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            subject VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");

    $columns = $pdo->query('SHOW COLUMNS FROM contacts')->fetchAll(PDO::FETCH_ASSOC);
    $columnNames = array_column($columns, 'Field');

    if (in_array('name', $columnNames, true) && !in_array('full_name', $columnNames, true)) {
        $pdo->exec(
            'ALTER TABLE contacts CHANGE COLUMN name full_name VARCHAR(255) NOT NULL'
        );
        $columnNames = array_values(array_diff($columnNames, ['name']));
        $columnNames[] = 'full_name';
    }

    $additions = [
        'full_name' => "ALTER TABLE contacts ADD COLUMN full_name VARCHAR(255) NOT NULL DEFAULT ''",
        'email' => "ALTER TABLE contacts ADD COLUMN email VARCHAR(255) NOT NULL DEFAULT ''",
        'subject' => "ALTER TABLE contacts ADD COLUMN subject VARCHAR(255) NOT NULL DEFAULT ''",
        'message' => 'ALTER TABLE contacts ADD COLUMN message TEXT NULL',
        'created_at' => 'ALTER TABLE contacts ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
    ];

    foreach ($additions as $column => $sql) {
        if (!in_array($column, $columnNames, true)) {
            $pdo->exec($sql);
        }
    }
}

function ensureAuditReportsSchema(PDO $pdo): void
{
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS audit_reports (
            id INT NOT NULL AUTO_INCREMENT,
            report_uuid VARCHAR(36) NOT NULL,
            url VARCHAR(2048) NOT NULL,
            mobile_report JSON NOT NULL,
            desktop_report JSON NOT NULL,
            recommendations JSON NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            UNIQUE KEY uniq_report_uuid (report_uuid),
            KEY idx_audit_url (url(255)),
            KEY idx_audit_created (created_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
}
