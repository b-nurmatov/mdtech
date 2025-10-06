function toggleDropdown(
  toggleAttrName,
  targetIdAttrName,
  droppedAttr,
  closeOthers,
  dontCloseOpened,
) {
  const toggles = document.querySelectorAll(`[${toggleAttrName}]`);

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const dropdownId = toggle.getAttribute(targetIdAttrName);
      const dropdown = document.getElementById(dropdownId);

      function closeAllDropdowns(togglesList) {
        togglesList.forEach((item) => {
          const targetElem = document.getElementById(
            item.getAttribute(targetIdAttrName),
          );
          targetElem !== dropdown
            ? targetElem.removeAttribute(droppedAttr)
            : false;

          targetElem !== dropdown ? item.removeAttribute(droppedAttr) : false;
        });
      }

      closeOthers ? closeAllDropdowns(toggles) : false;

      dropdown.hasAttribute(droppedAttr) && !dontCloseOpened
        ? dropdown.removeAttribute(droppedAttr)
        : dropdown.setAttribute(droppedAttr, "");

      toggle.hasAttribute(droppedAttr) && !dontCloseOpened
        ? toggle.removeAttribute(droppedAttr)
        : toggle.setAttribute(droppedAttr, "");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  toggleDropdown("data-submenu-toggle", "data-targetId", "data-dropped", true);

  toggleDropdown("data-mainMenu-toggle", "data-targetId", "data-dropped");

  toggleDropdown("data-dropdownBlock-toggle", "data-targetId", "data-dropped");

  toggleDropdown(
    "data-tabsContainer-toggle",
    "data-targetId",
    "data-opened",
    true,
    true,
  );
});
