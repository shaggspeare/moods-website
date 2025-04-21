// Sticky nav
export const stickyNav = (extraClass?: string): void => {
  window.addEventListener("scroll", () => {
    let offset: number = window.scrollY;
    const sticky: NodeListOf<HTMLElement> = document.querySelectorAll(
      extraClass ? `.${extraClass}` : ".mil-animated"
    );
    for (let i = 0; i < sticky.length; i++) {
      const stick: HTMLElement = sticky[i];
      if (extraClass) {
        if (stick) {
          if (offset > 10) {
            stick.classList.add("mil-hide-top");
          } else {
            stick.classList.remove("mil-hide-top");
          }
        }
      } else {
        if (stick) {
          if (offset > 10) {
            stick.classList.remove("mil-top-panel-transparent");
          } else {
            stick.classList.add("mil-top-panel-transparent");
          }
        }
      }
    }
  });
};

export const milButtonClick = (): void => {
  const milTabButtons: NodeListOf<HTMLElement> = document.querySelectorAll(".mil-tab-buttons a");
  milTabButtons.forEach((a: HTMLElement) => {
    a.addEventListener("click", () => {
      milTabButtons.forEach((element: HTMLElement) => {
        element.classList.remove("mil-active");
      });
      a.classList.add("mil-active");
    });
  });
};

export const milButtonClick2 = (): void => {
  const milTabButtons: NodeListOf<HTMLElement> = document.querySelectorAll(".mil-tabs-left-nav a");
  milTabButtons.forEach((a: HTMLElement) => {
    a.addEventListener("click", () => {
      milTabButtons.forEach((element: HTMLElement) => {
        element.classList.remove("mil-active");
      });
      a.classList.add("mil-active");
    });
  });
};

export const accordion = (): void => {
  var acc: HTMLCollectionOf<Element> = document.getElementsByClassName("mil-accordion");
  var i: number;

  for (i = 0; i < acc.length; i++) {
    (acc[i] as HTMLElement).onclick = function(this: HTMLElement) {
      this.classList.toggle("mil-active");
      var panel = this.nextElementSibling as HTMLElement;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    };
  }
};