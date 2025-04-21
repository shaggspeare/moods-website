/**
 * Adds sticky navigation behavior to elements based on scroll position
 * @param extraClass - Optional CSS class to target specific elements
 * @returns A cleanup function that removes the scroll event listener
 */
export const stickyNav = (extraClass?: string): () => void => {
  const handleScroll = (): void => {
    const offset: number = window.scrollY;
    const threshold: number = 10;
    const selector: string = extraClass ? `.${extraClass}` : ".mil-animated";
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector);

    elements.forEach((element: HTMLElement) => {
      if (!element) return;

      if (extraClass) {
        // Add or remove mil-hide-top class based on scroll position
        element.classList.toggle("mil-hide-top", offset > threshold);
      } else {
        // Add or remove mil-top-panel-transparent class based on scroll position
        element.classList.toggle("mil-top-panel-transparent", offset <= threshold);
      }
    });
  };

  // Initial call to apply styles based on current scroll position
  handleScroll();

  // Add event listener
  window.addEventListener("scroll", handleScroll);

  // Return cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

/**
 * Sets up click handlers for tab buttons to manage active state
 * @param selector - CSS selector for the tab buttons
 * @returns A cleanup function that removes all click event listeners
 */
export const setupTabButtons = (selector: string): () => void => {
  const tabButtons: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
  const clickHandlers: Map<HTMLElement, (event: Event) => void> = new Map();

  tabButtons.forEach((button: HTMLElement) => {
    const clickHandler = () => {
      // Remove active class from all buttons
      tabButtons.forEach((element: HTMLElement) => {
        element.classList.remove("mil-active");
      });

      // Add active class to clicked button
      button.classList.add("mil-active");
    };

    // Store the handler reference so we can remove it later
    clickHandlers.set(button, clickHandler);

    // Add the click event listener
    button.addEventListener("click", clickHandler);
  });

  // Return cleanup function
  return () => {
    tabButtons.forEach((button: HTMLElement) => {
      const handler = clickHandlers.get(button);
      if (handler) {
        button.removeEventListener("click", handler);
      }
    });
    clickHandlers.clear();
  };
};

/**
 * Sets up click handlers for standard tab buttons
 * @deprecated Use setupTabButtons(".mil-tab-buttons a") instead
 * @returns A cleanup function that removes all click event listeners
 */
export const milButtonClick = (): () => void => {
  return setupTabButtons(".mil-tab-buttons a");
};

/**
 * Sets up click handlers for left navigation tab buttons
 * @deprecated Use setupTabButtons(".mil-tabs-left-nav a") instead
 * @returns A cleanup function that removes all click event listeners
 */
export const milButtonClick2 = (): () => void => {
  return setupTabButtons(".mil-tabs-left-nav a");
};

/**
 * Sets up accordion functionality for elements with the 'mil-accordion' class
 * Toggles the 'mil-active' class on the accordion element and adjusts the maxHeight
 * of the next element to create an expand/collapse effect
 * @returns A cleanup function that removes all click event handlers
 */
export const accordion = (): () => void => {
  const accordionElements: HTMLCollectionOf<Element> = document.getElementsByClassName("mil-accordion");
  const originalHandlers: Map<HTMLElement, Function> = new Map();
  const newHandlers: Map<HTMLElement, (event: Event) => void> = new Map();

  // Convert HTMLCollection to Array for easier iteration
  Array.from(accordionElements).forEach((element: Element) => {
    const accordionHeader = element as HTMLElement;

    // Store the original onclick handler if it exists
    if (accordionHeader.onclick) {
      originalHandlers.set(accordionHeader, accordionHeader.onclick);
    }

    // Create the new click handler
    const clickHandler = function(this: HTMLElement, event: Event): void {
      // Toggle active state on the accordion header
      this.classList.toggle("mil-active");

      // Get the panel (next element after the header)
      const panel = this.nextElementSibling as HTMLElement;

      if (!panel) return;

      // Toggle panel visibility by manipulating maxHeight
      if (panel.style.maxHeight) {
        // Collapse panel
        // @ts-ignore
        panel.style.maxHeight = null;
      } else {
        // Expand panel
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    };

    // Store the new handler reference
    newHandlers.set(accordionHeader, clickHandler);

    // Set the onclick handler
    // @ts-ignore
    accordionHeader.onclick = clickHandler;
  });

  // Return cleanup function
  return () => {
    Array.from(accordionElements).forEach((element: Element) => {
      const accordionHeader = element as HTMLElement;

      // Restore original handler or remove the onclick property
      if (originalHandlers.has(accordionHeader)) {
        // @ts-ignore
        accordionHeader.onclick = originalHandlers.get(accordionHeader) as Function;
      } else {
        accordionHeader.onclick = null;
      }
    });

    // Clear the maps
    originalHandlers.clear();
    newHandlers.clear();
  };
};
