const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);

function isLocalHostname(hostname: string): boolean {
  const normalized = hostname.toLowerCase();

  return (
    LOCAL_HOSTS.has(normalized) ||
    normalized.endsWith(".local") ||
    normalized.endsWith(".localhost")
  );
}

export function shouldEnableSiteProtections(hostname?: string): boolean {
  if (process.env.NEXT_PUBLIC_DISABLE_SITE_PROTECTIONS === "true") {
    return false;
  }

  if (process.env.NEXT_PUBLIC_ENABLE_SITE_PROTECTIONS === "true") {
    return true;
  }

  if (process.env.NODE_ENV !== "production") {
    return false;
  }

  if (!hostname) {
    return false;
  }

  return !isLocalHostname(hostname);
}

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName;

  return (
    tagName === "INPUT" ||
    tagName === "TEXTAREA" ||
    tagName === "SELECT" ||
    target.isContentEditable
  );
}

function isBlockedShortcut(event: KeyboardEvent): boolean {
  const key = event.key.toLowerCase();
  const keyCode = event.keyCode || event.which;

  if (event.key === "F12" || keyCode === 123) {
    return true;
  }

  if (event.ctrlKey && event.shiftKey && ["i", "j", "c", "k"].includes(key)) {
    return true;
  }

  if (event.metaKey && event.altKey && ["i", "j", "c", "u"].includes(key)) {
    return true;
  }

  if (event.metaKey && event.shiftKey && ["c", "i", "j"].includes(key)) {
    return true;
  }

  if (event.ctrlKey && ["u", "s", "p"].includes(key)) {
    return true;
  }

  if (event.metaKey && ["u", "s"].includes(key)) {
    return true;
  }

  return false;
}

export function attachSiteProtections() {
  const handleContextMenu = (event: MouseEvent) => {
    if (isEditableTarget(event.target)) {
      return;
    }

    event.preventDefault();
  };

  const handleCopy = (event: ClipboardEvent) => {
    if (isEditableTarget(event.target)) {
      return;
    }

    event.preventDefault();
  };

  const handleDragStart = (event: DragEvent) => {
    if (isEditableTarget(event.target)) {
      return;
    }

    event.preventDefault();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (isEditableTarget(event.target)) {
      return;
    }

    if (isBlockedShortcut(event)) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  document.body.classList.add("site-protected");

  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("copy", handleCopy);
  document.addEventListener("cut", handleCopy);
  document.addEventListener("dragstart", handleDragStart);
  document.addEventListener("keydown", handleKeyDown, true);

  return () => {
    document.body.classList.remove("site-protected");
    document.removeEventListener("contextmenu", handleContextMenu);
    document.removeEventListener("copy", handleCopy);
    document.removeEventListener("cut", handleCopy);
    document.removeEventListener("dragstart", handleDragStart);
    document.removeEventListener("keydown", handleKeyDown, true);
  };
}
