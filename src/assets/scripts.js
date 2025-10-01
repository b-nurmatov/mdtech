function toggleSubmenu(
  toggleAttrName,
  targetIdAttrName,
  droppedAttr,
  closeOthers,
  dontCloseOpened,
) {
  const toggles = document.querySelectorAll(`[${toggleAttrName}]`);

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const submenuId = toggle.getAttribute(targetIdAttrName);
      const submenu = document.getElementById(submenuId);

      if (closeOthers) {
        toggles.forEach((item) => {
          const otherMenu = document.getElementById(
            item.getAttribute(targetIdAttrName),
          );
          otherMenu !== submenu
            ? otherMenu.removeAttribute(droppedAttr)
            : false;

          otherMenu !== submenu ? item.removeAttribute(droppedAttr) : false;
        });
      }

      submenu.hasAttribute(droppedAttr) && !dontCloseOpened
        ? submenu.removeAttribute(droppedAttr)
        : submenu.setAttribute(droppedAttr, "");

      toggle.hasAttribute(droppedAttr) && !dontCloseOpened
        ? toggle.removeAttribute(droppedAttr)
        : toggle.setAttribute(droppedAttr, "");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  toggleSubmenu("data-submenu-toggle", "data-targetId", "data-dropped", true);

  toggleSubmenu("data-mainMenu-toggle", "data-targetId", "data-dropped");

  toggleSubmenu("data-dropdownBlock-toggle", "data-targetId", "data-dropped");

  toggleSubmenu(
    "data-tabsContainer-toggle",
    "data-targetId",
    "data-opened",
    true,
    true,
  );
});
