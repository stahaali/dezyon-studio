-- Run in phpMyAdmin if contacts table has wrong/old columns
-- Select database: u527758351_dezyonstudio

ALTER TABLE `contacts`
  ADD COLUMN IF NOT EXISTS `full_name` VARCHAR(255) NOT NULL DEFAULT '' AFTER `id`,
  ADD COLUMN IF NOT EXISTS `email` VARCHAR(255) NOT NULL DEFAULT '' AFTER `full_name`,
  ADD COLUMN IF NOT EXISTS `subject` VARCHAR(255) NOT NULL DEFAULT '' AFTER `email`,
  ADD COLUMN IF NOT EXISTS `message` TEXT NULL AFTER `subject`,
  ADD COLUMN IF NOT EXISTS `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `message`;
