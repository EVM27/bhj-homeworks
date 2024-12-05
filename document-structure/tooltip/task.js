document.addEventListener("DOMContentLoaded", () => {
    const tooltips = document.querySelectorAll(".has-tooltip");
  
    let activeTooltip = null; 
  
    tooltips.forEach((tooltip) => {
      tooltip.addEventListener("click", (event) => {
        event.preventDefault();
  
        if (activeTooltip && activeTooltip === tooltip.nextElementSibling) {
          activeTooltip.classList.remove("tooltip_active");
          activeTooltip = null;
          return;
        }

        if (activeTooltip) {
          activeTooltip.classList.remove("tooltip_active");
        }

        let tooltipElement = tooltip.nextElementSibling;
  
        if (!tooltipElement || !tooltipElement.classList.contains("tooltip")) {
          tooltipElement = document.createElement("div");
          tooltipElement.classList.add("tooltip");
          tooltipElement.textContent = tooltip.getAttribute("title");
          tooltip.insertAdjacentElement("afterend", tooltipElement);
        }

        const rect = tooltip.getBoundingClientRect();
        tooltipElement.style.left = `${rect.left}px`;
        tooltipElement.style.top = `${rect.bottom}px`;
  
        tooltipElement.classList.add("tooltip_active");
        activeTooltip = tooltipElement;
      });
    });
  
    document.addEventListener("click", (event) => {
      if (activeTooltip && !event.target.classList.contains("has-tooltip")) {
        activeTooltip.classList.remove("tooltip_active");
        activeTooltip = null;
      }
    });
  });
  