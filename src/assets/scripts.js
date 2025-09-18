function toggleSubmenu(
  toggleAttrName,
  targetIdAttrName,
  droppedAttr,
  closeOthers,
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

      // toggle.setAttribute();

      submenu.hasAttribute(droppedAttr)
        ? submenu.removeAttribute(droppedAttr)
        : submenu.setAttribute(droppedAttr, "");

      toggle.hasAttribute(droppedAttr)
        ? toggle.removeAttribute(droppedAttr)
        : toggle.setAttribute(droppedAttr, "");
    });
  });
}

// function toggleNavMenu(toggleAttrName, targetIdAttrName)

document.addEventListener("DOMContentLoaded", () => {
  toggleSubmenu("data-submenu-toggle", "data-targetId", "data-dropped", true);

  toggleSubmenu("data-mainMenu-toggle", "data-targetId", "data-dropped");
});
