"use strict";
// NavEvents.js

class NavEvents
{
  // Initializes an object instance with the provided values.
  constructor()
  {
    // Create the class properties.
    this.PrevNavItem = null;
  }

  // Adds the HTML event handlers.
  AddEvents()
  {
    window.addEventListener("resize", this.WindowResize.bind(this))
    document.addEventListener("click", this.DocumentClick.bind(this));
    menuIco.addEventListener("click", this.MenuClick.bind(this));
    content.addEventListener("mouseenter", this.ContentMouseEnter.bind(this));

    // Get element properties.
    this.menubar = document.getElementById("menubar");

    // Set defaults.
    this.menubar.style.display = "none";
    menuIco.style.display = "none";
    this.reducedWidth = false;
    this.WindowResize();
  }

  // Hide the sidebar if at a reduced width.
  ContentMouseEnter()
  {
    if (this.reducedWidth == true)
    {
      sidebar.style.display = "none";
    }
  }

  // Document "click" handler method.
  // event - The Source Element event.
  DocumentClick(event)
  {
    let eSrc = event.target;

    if ("DIV" == eSrc.tagName)
    {
      this.SidebarEvents(eSrc);
    }
  }

  // Click on the menu icon.
  MenuClick()
  {
    if (sidebar.style.display == "none")
    {
      // Show the sidebar.
      sidebar.style.display = "inline-block";
      sidebar.style.position = "absolute";
    }
    else
    {
      // Hide the sidebar.
      sidebar.style.display = "none";
    }
  }

  // Perform the sidebar events.
  SidebarEvents(eSrc)
  {
    // Only perform sidebar action for these class selectors.
    if ("navLiveGroup" == eSrc.className
      || "navItem" == eSrc.className)
    {
      // Get the data-href value.
      let href = eSrc.dataset.href;
      if (href)
      {
        this.ContentMouseEnter();
        contentFrame.src = href;
      }

      if (this.PrevNavItem != null)
      {
        // Resets to original value.
        this.PrevNavItem.style.backgroundColor = "";
      }
      this.PrevNavItem = eSrc;

      let highlight = "#d4dfff";
      eSrc.style.backgroundColor = highlight;
    }
  }

  // Set to reduced with if below minimum width.
  WindowResize()
  {
    // Webpage width with scrollbars
    let width = window.innerWidth;

    let minimum = 800;
    if (width < minimum)
    {
      this.reducedWidth = true;

      // Show the menu icon.
      this.menubar.style.display = "block";
      menuIco.style.display = "block";

      // Hide the sidebar
      sidebar.style.display = "none";
      // ToDo: use widest string width?
      sidebar.style.width = "240px";
      content.style.width = "100%";
    }
    else
    {
      this.reducedWidth = false;

      // Hide the menu icon.
      this.menubar.style.display = "none";
      menuIco.style.display = "none";
      menuIco.style.display = "none";

      // Show the sidebar
      sidebar.style.display = "inline-block";
      sidebar.style.position = "relative";
      // ToDo: use widest string width?
      sidebar.style.width = "25%";
      content.style.width = "75%";
    }
  }
}