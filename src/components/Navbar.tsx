// src/components/Navbar.tsx
import React, { useState, useRef, useEffect } from "react";
import dellLogo from "../assets/delltechnologieslogo.png";
import worldIcon from "../assets/worldicon.png";
import contactUsIcon from "../assets/contactus.png";
import crossIconImg from "../assets/crossinsidecircleimage.png";

const SignInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
    <path
      fill="#707070"
      d="M16 16H0l.11-.54c0-.21.52-4.4 3.68-6.55l.32-.21.31.21a5.48 5.48 0 0 0 7.16.09l.31-.21.32.21c3.26 2.15 3.68 6.34 3.68 6.55L16 16zM1.16 14.93h13.58A8.67 8.67 0 0 0 11.89 10 6.71 6.71 0 0 1 4 10a9.34 9.34 0 0 0-2.84 4.93zM8 0a4.51 4.51 0 0 0-4.424 5.39 4.51 4.51 0 0 0 8.174 1.625A4.51 4.51 0 0 0 8 0zm0 7.94a3.44 3.44 0 0 1-2.442-5.872A3.44 3.44 0 0 1 11.43 4.51 3.44 3.44 0 0 1 8 7.94z"
    ></path>
  </svg>
);

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
    <path
      fill="#707070"
      d="M16 3.09H2.88L2 .32H0v1.07h1.17L4.48 12.8h8.85v-1.07h-8L4.8 9.92h9.81L16 3.09zM4.48 8.85L3.09 4.16h11.52l-1 4.69H4.48z"
    ></path>
    <path
      fill="#707070"
      d="M12.59 12.05c-.239-.001-.477.045-.698.136a1.81 1.81 0 0 0-1.122 1.684 1.74 1.74 0 0 0 .118.707c.088.225.222.429.393.599a1.74 1.74 0 0 0 1.309.504 1.74 1.74 0 0 0 1.81-1.81 1.8 1.8 0 0 0-1.81-1.82zm0 2.56a.75.75 0 0 1-.54-1.28.75.75 0 0 1 1.28.54.73.73 0 0 1-.74.74zm-7.47-2.56a1.8 1.8 0 0 0-1.81 1.82 1.73 1.73 0 0 0 1.81 1.81 1.73 1.73 0 0 0 1.81-1.81 1.8 1.8 0 0 0-1.81-1.82zm0 2.56a.75.75 0 0 1-.527-1.284.75.75 0 0 1 1.277.544.73.73 0 0 1-.75.74z"
    ></path>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" fill="#707070" viewBox="0 0 20 20">
    <circle cx="9" cy="9" r="8" stroke="#707070" strokeWidth="2" fill="none" />
    <line x1="15" y1="15" x2="19" y2="19" stroke="#707070" strokeWidth="2" />
  </svg>
);

const CrossIcon = ({ onClick }: { onClick: () => void }) => (
  <div className="navbar-search-cross-btn" onClick={onClick}>
    <img
      src={crossIconImg}
      alt="Clear search"
      className="navbar-search-cross-img"
    />
  </div>
);

const Navbar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSecondaryPanel, setActiveSecondaryPanel] = useState<
    string | null
  >(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const clearSearch = () => {
    setSearchInput("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  // Handle dropdown toggling
  const handleDropdownToggle = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Handle secondary panel hover
  const handleSecondaryPanelHover = (panel: string | null) => {
    setActiveSecondaryPanel(panel);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    // Existing click-outside handler
    const handleClickOutside = (event: MouseEvent) => {
      const navLinks = document.querySelectorAll(".navbar-link-container");
      navLinks.forEach((link) => {
        if (!link.contains(event.target as Node)) {
          link.classList.remove("active");
        }
      });

      const topIcons = document.querySelectorAll(".navbar-icon-dropdown");
      if (
        activeDropdown &&
        !Array.from(topIcons).some((icon) =>
          icon.contains(event.target as Node)
        )
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // New height equalization code
    const handleHeightEqualization = (item: Element) => {
      const primary = item.querySelector(".dropdown-primary-panel");
      const secondary = item.querySelector(".dropdown-secondary-panel");
      if (!primary || !secondary) return;

      const maxHeight = Math.max(
        primary.getBoundingClientRect().height,
        secondary.getBoundingClientRect().height
      );
      (primary as HTMLElement).style.minHeight = `${maxHeight}px`;
      (secondary as HTMLElement).style.minHeight = `${maxHeight}px`;
    };

    const equalizeElements = document.querySelectorAll(".has-secondary");
    const mouseEnterHandlers = Array.from(equalizeElements).map((item) => {
      const handler = () => handleHeightEqualization(item);
      item.addEventListener("mouseenter", handler);
      return { item, handler };
    });

    // Cleanup function
    return () => {
      document.removeEventListener("click", handleClickOutside);

      // Remove height equalization listeners
      mouseEnterHandlers.forEach(({ item, handler }) => {
        item.removeEventListener("mouseenter", handler);
      });
    };
  }, [activeDropdown]); // Preserve existing dependency

  // Toggle dropdown on click
  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const target = e.currentTarget;
    const navLinks = document.querySelectorAll(".navbar-link-container");

    navLinks.forEach((link) => {
      if (link !== target) {
        link.classList.remove("active");
      }
    });

    target.classList.toggle("active");

    // Reset secondary panel when toggling
    setActiveSecondaryPanel(null);
  };

  return (
    <>
      {activeDropdown && <div className="page-overlay"></div>}
      <header className="navbar">
        <div className="navbar-top">
          <div className="navbar-content">
            <div className="navbar-left">
              <img
                src={dellLogo}
                alt="Dell Technologies Logo"
                className="navbar-logo"
              />
              <div
                className={`navbar-search ${isSearchFocused ? "focused" : ""}`}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search Dell"
                  className="navbar-search-input"
                  value={searchInput}
                  onChange={handleSearchChange}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                />
                {searchInput && <CrossIcon onClick={clearSearch} />}
                <button className="navbar-search-btn">
                  <SearchIcon />
                </button>
              </div>
            </div>
            <div className="navbar-right">
              <span
                className={`navbar-icon navbar-icon-dropdown ${
                  activeDropdown === "signin" ? "active" : ""
                }`}
                onClick={() => handleDropdownToggle("signin")}
              >
                <SignInIcon />
                <span className="navbar-icon-label">
                  Sign In{" "}
                  <span
                    className={`dropdown-arrow ${
                      activeDropdown === "signin" ? "rotated" : ""
                    }`}
                  >
                    ▼
                  </span>
                </span>

                {activeDropdown === "signin" && (
                  <div className="navbar-dropdown signin-dropdown">
                    <h3>Welcome to Dell</h3>
                    <div className="my-account-section">
                      <p className="section-title">My Account</p>
                      <ul className="account-benefits">
                        <li>Place orders quickly and easily</li>
                        <li>View orders and track your shipping status</li>
                        <li>Create and access a list of your products</li>
                      </ul>
                    </div>
                    <button className="dropdown-signin-btn">Sign In</button>
                    <button className="dropdown-create-btn">
                      Create an Account
                    </button>
                    <button className="dropdown-premier-btn">
                      Premier Sign In
                    </button>
                    <button className="dropdown-partner-btn">
                      Partner Program Sign In
                    </button>
                  </div>
                )}
              </span>
              <span className="navbar-icon navbar-contact">
                <img
                  src={contactUsIcon}
                  alt="Contact Us"
                  className="navbar-contact-icon"
                />
                <span className="navbar-icon-label">Contact Us</span>
              </span>
              <span className="navbar-icon navbar-icon-dropdown">
                <img
                  src={worldIcon}
                  alt="World"
                  className="navbar-world-icon"
                />
                <span className="navbar-icon-label">IN/EN</span>
              </span>
              <span
                className={`navbar-icon navbar-icon-dropdown ${
                  activeDropdown === "cart" ? "active" : ""
                }`}
                onClick={() => handleDropdownToggle("cart")}
              >
                <CartIcon />
                <span className="navbar-icon-label">
                  Cart{" "}
                  <span
                    className={`dropdown-arrow ${
                      activeDropdown === "cart" ? "rotated" : ""
                    }`}
                  >
                    ▼
                  </span>
                </span>

                {activeDropdown === "cart" && (
                  <div className="navbar-dropdown cart-dropdown">
                    <h3>Your Dell.com Carts</h3>
                    <p className="cart-empty-message">Your cart is empty</p>
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="navbar-bottom">
          <div className="navbar-content">
            <div className="navbar-center">
              <div className="navbar-link-container" onClick={toggleDropdown}>
                <span className="navbar-link">
                  Artificial Intelligence{" "}
                  <span className="dropdown-arrow">▼</span>
                </span>
                <div className="navbar-dropdown">
                  <a href="#" className="dropdown-item">
                    AI Solutions
                  </a>
                  <a href="#" className="dropdown-item">
                    AI Software Solutions
                  </a>
                </div>
              </div>
              <div className="navbar-link-container" onClick={toggleDropdown}>
                <span className="navbar-link">
                  IT Infrastructure <span className="dropdown-arrow">▼</span>
                </span>
                <div className="navbar-dropdown nested-dropdown">
                  <div className="dropdown-primary-panel">
                    <a href="#" className="dropdown-item">
                      Dell APEX Multicloud & aaS
                    </a>

                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "products" ? "active" : ""
                      }`}
                      onMouseEnter={() => handleSecondaryPanelHover("products")}
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Products &gt;
                      {activeSecondaryPanel === "products" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            Servers
                          </a>
                          <a href="#" className="dropdown-item">
                            Data Storage
                          </a>
                          <a href="#" className="dropdown-item">
                            Data Protection
                          </a>
                          <a href="#" className="dropdown-item">
                            Hyperconverged Infrastructure
                          </a>
                          <a href="#" className="dropdown-item">
                            Networking
                          </a>
                          <a href="#" className="dropdown-item">
                            Infrastructure Accessories
                          </a>
                          <a href="#" className="dropdown-item">
                            AIOps & IT Observability
                          </a>
                        </div>
                      )}
                    </div>

                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "workloads" ? "active" : ""
                      }`}
                      onMouseEnter={() =>
                        handleSecondaryPanelHover("workloads")
                      }
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Workloads &gt;
                      {activeSecondaryPanel === "workloads" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            View All Workloads
                          </a>
                          <a href="#" className="dropdown-item">
                            Cloud Solutions
                          </a>
                          <a href="#" className="dropdown-item">
                            Data Management
                          </a>
                          <a href="#" className="dropdown-item">
                            Edge Solutions
                          </a>
                          <a href="#" className="dropdown-item">
                            Kubernetes & Containers
                          </a>
                          <a href="#" className="dropdown-item">
                            Security Solutions
                          </a>
                          <a href="#" className="dropdown-item">
                            Virtual Desktop Infrastructure
                          </a>
                        </div>
                      )}
                    </div>

                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "industry" ? "active" : ""
                      }`}
                      onMouseEnter={() => handleSecondaryPanelHover("industry")}
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Industry &gt;
                      {activeSecondaryPanel === "industry" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            View All Industry
                          </a>
                          <a href="#" className="dropdown-item">
                            Digital Cities
                          </a>
                          <a href="#" className="dropdown-item">
                            Energy, Climate Action & Sustainability
                          </a>
                          <a href="#" className="dropdown-item">
                            Financial
                          </a>
                          <a href="#" className="dropdown-item">
                            Healthcare & Life Sciences
                          </a>
                          <a href="#" className="dropdown-item">
                            Higher Education
                          </a>
                          <a href="#" className="dropdown-item">
                            K-12 Education
                          </a>
                          <a href="#" className="dropdown-item">
                            Manufacturing
                          </a>
                          <a href="#" className="dropdown-item">
                            Retail
                          </a>
                          <a href="#" className="dropdown-item">
                            Safety & Security
                          </a>
                          <a href="#" className="dropdown-item">
                            Telecommunications
                          </a>
                          <a href="#" className="dropdown-item">
                            Utilities
                          </a>
                        </div>
                      )}
                    </div>

                    <a href="#" className="dropdown-item">
                      Payment Solutions
                    </a>
                    <a href="#" className="dropdown-item">
                      Developers & DevOps
                    </a>
                  </div>
                </div>
              </div>
              <div className="navbar-link-container" onClick={toggleDropdown}>
                <span className="navbar-link">
                  Computers & Accessories{" "}
                  <span className="dropdown-arrow">▼</span>
                </span>
                <div className="navbar-dropdown nested-dropdown">
                  <div className="dropdown-primary-panel">
                    {/* Laptops Submenu */}
                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "laptops" ? "active" : ""
                      }`}
                      onMouseEnter={() => handleSecondaryPanelHover("laptops")}
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Laptops &gt;
                      {activeSecondaryPanel === "laptops" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            View All Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Pro Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Pro Max Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Alienware Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Latitude Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            XPS Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Inspiron Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Vostro Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            G Series Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Precision Mobile Workstations
                          </a>
                          <a href="#" className="dropdown-item">
                            Rugged Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Chromebook Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            4G/5G Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Copilot+ PCs
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Desktops Submenu */}
                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "desktops" ? "active" : ""
                      }`}
                      onMouseEnter={() => handleSecondaryPanelHover("desktops")}
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Desktops & All-in-Ones &gt;
                      {activeSecondaryPanel === "desktops" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            View All Desktops & All-in-Ones
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Pro Desktops
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Pro Max Desktops
                          </a>
                          <a href="#" className="dropdown-item">
                            Alienware Desktops
                          </a>
                          <a href="#" className="dropdown-item">
                            OptiPlex Desktops & All-in-Ones
                          </a>
                          <a href="#" className="dropdown-item">
                            Inspiron Desktops & All-in-Ones
                          </a>
                          <a href="#" className="dropdown-item">
                            Vostro Desktops
                          </a>
                          <a href="#" className="dropdown-item">
                            Precision Fixed Workstations
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Monitors Submenu */}
                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "monitors" ? "active" : ""
                      }`}
                      onMouseEnter={() => handleSecondaryPanelHover("monitors")}
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Monitors &gt;
                      {activeSecondaryPanel === "monitors" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            View All Monitors
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Monitors
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Pro Monitors
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell UltraSharp Monitors
                          </a>
                          <a href="#" className="dropdown-item">
                            Gaming Monitors
                          </a>
                          <a href="#" className="dropdown-item">
                            Alienware Monitors
                          </a>
                          <a href="#" className="dropdown-item">
                            Ultrawide Monitors
                          </a>
                          <a href="#" className="dropdown-item">
                            4K Monitors
                          </a>
                          <a href="#" className="dropdown-item">
                            Curved Monitors
                          </a>
                          <a href="#" className="dropdown-item">
                            Monitors with Speakers
                          </a>
                          <a href="#" className="dropdown-item">
                            Video Conferencing Monitors
                          </a>
                          <a href="#" className="dropdown-item">
                            Monitor Accessories
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Gaming Submenu */}
                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "gaming" ? "active" : ""
                      }`}
                      onMouseEnter={() => handleSecondaryPanelHover("gaming")}
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Gaming &gt;
                      {activeSecondaryPanel === "gaming" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            Alienware
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Gaming
                          </a>
                          <a href="#" className="dropdown-item">
                            Gaming Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Gaming Desktops
                          </a>
                          <a href="#" className="dropdown-item">
                            Alienware & Gaming Monitors
                          </a>
                          <a href="#" className="dropdown-item">
                            Gaming Accessories
                          </a>
                        </div>
                      )}
                    </div>

                    {/* PC Accessories Submenu */}
                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "accessories" ? "active" : ""
                      }`}
                      onMouseEnter={() =>
                        handleSecondaryPanelHover("accessories")
                      }
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      PC Accessories &gt;
                      {activeSecondaryPanel === "accessories" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            View All PC Accessories
                          </a>
                          <a href="#" className="dropdown-item">
                            Docking Stations
                          </a>
                          <a href="#" className="dropdown-item">
                            Audio
                          </a>
                          <a href="#" className="dropdown-item">
                            Keyboards & Mice
                          </a>
                          <a href="#" className="dropdown-item">
                            Cables & Adapters
                          </a>
                          <a href="#" className="dropdown-item">
                            Laptop Bags & Cases
                          </a>
                          <a href="#" className="dropdown-item">
                            Hard Drives & Storage
                          </a>
                          <a href="#" className="dropdown-item">
                            Webcams
                          </a>
                          <a href="#" className="dropdown-item">
                            Networking Accessories
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Simple Items */}
                    <a href="#" className="dropdown-item">
                      Parts, Batteries & Upgrades
                    </a>
                    <a href="#" className="dropdown-item">
                      Thin Clients
                    </a>

                    {/* Workstations Submenu */}
                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "workstations" ? "active" : ""
                      }`}
                      onMouseEnter={() =>
                        handleSecondaryPanelHover("workstations")
                      }
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Workstations &gt;
                      {activeSecondaryPanel === "workstations" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            View All Workstations
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Pro Max Laptops
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Pro Max Desktops
                          </a>
                          <a href="#" className="dropdown-item">
                            Precision Mobile Workstations
                          </a>
                          <a href="#" className="dropdown-item">
                            Precision Fixed Workstations
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="navbar-link-container" onClick={toggleDropdown}>
                <span className="navbar-link">
                  Services <span className="dropdown-arrow">▼</span>
                </span>
                <div className="navbar-dropdown nested-dropdown">
                  <div className="dropdown-primary-panel">
                    <a href="#" className="dropdown-item">
                      View All Services
                    </a>

                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "professional-services"
                          ? "active"
                          : ""
                      }`}
                      onMouseEnter={() =>
                        handleSecondaryPanelHover("professional-services")
                      }
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Professional Services &gt;
                      {activeSecondaryPanel === "professional-services" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            View All Professional Services
                          </a>
                          <a href="#" className="dropdown-item">
                            Artificial Intelligence Services
                          </a>
                          <a href="#" className="dropdown-item">
                            Multicloud Services
                          </a>
                          <a href="#" className="dropdown-item">
                            Data & Applications Services
                          </a>
                          <a href="#" className="dropdown-item">
                            Modern Workforce Services
                          </a>
                          <a href="#" className="dropdown-item">
                            Security & Resiliency Services
                          </a>
                        </div>
                      )}
                    </div>

                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "lifecycle-services"
                          ? "active"
                          : ""
                      }`}
                      onMouseEnter={() =>
                        handleSecondaryPanelHover("lifecycle-services")
                      }
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Lifecycle Services &gt;
                      {activeSecondaryPanel === "lifecycle-services" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            View All Lifecycle Services
                          </a>
                          <a href="#" className="dropdown-item">
                            Deployment Services
                          </a>
                          <a href="#" className="dropdown-item">
                            Managed & Residency Services
                          </a>
                          <a href="#" className="dropdown-item">
                            Support Services
                          </a>
                          <a href="#" className="dropdown-item">
                            Recovery & Recycling Services
                          </a>
                        </div>
                      )}
                    </div>

                    <a href="#" className="dropdown-item">
                      Training & Certification
                    </a>
                    <a href="#" className="dropdown-item">
                      Technology & Tools
                    </a>
                    <a href="#" className="dropdown-item">
                      Premier: e-Procurement & Integrations
                    </a>
                  </div>
                </div>
              </div>

              <div className="navbar-link-container" onClick={toggleDropdown}>
                <span className="navbar-link">
                  Support <span className="dropdown-arrow">▼</span>
                </span>
                <div className="navbar-dropdown">
                  <a href="#" className="dropdown-item">
                    Support Home
                  </a>
                  <a href="#" className="dropdown-item">
                    Support Library
                  </a>
                  <a href="#" className="dropdown-item">
                    Support Videos
                  </a>
                  <a href="#" className="dropdown-item">
                    Support Services & Warranty
                  </a>
                  <a href="#" className="dropdown-item">
                    Drivers & Downloads
                  </a>
                  <a href="#" className="dropdown-item">
                    Manuals & Documentation
                  </a>
                  <a href="#" className="dropdown-item">
                    PC Diagnostics
                  </a>
                  <a href="#" className="dropdown-item">
                    Self-Repair & Parts
                  </a>
                  <a href="#" className="dropdown-item">
                    Service Requests & Dispatch Status
                  </a>
                  <a href="#" className="dropdown-item">
                    Order Support
                  </a>
                  <a href="#" className="dropdown-item">
                    Contact Technical Support
                  </a>
                  <a href="#" className="dropdown-item">
                    Community
                  </a>
                </div>
              </div>

              <div className="navbar-link-container" onClick={toggleDropdown}>
                <span className="navbar-link">
                  Deals <span className="dropdown-arrow">▼</span>
                </span>
                <div className="navbar-dropdown nested-dropdown">
                  <div className="dropdown-primary-panel">
                    <a href="#" className="dropdown-item">
                      View All Deals
                    </a>
                    <a href="#" className="dropdown-item">
                      Laptop Deals
                    </a>
                    <a href="#" className="dropdown-item">
                      Desktop Deals
                    </a>
                    <a href="#" className="dropdown-item">
                      Gaming PC Deals
                    </a>

                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "business-deals"
                          ? "active"
                          : ""
                      }`}
                      onMouseEnter={() =>
                        handleSecondaryPanelHover("business-deals")
                      }
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Business Deals &gt;
                      {activeSecondaryPanel === "business-deals" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            Business Laptop Deals
                          </a>
                          <a href="#" className="dropdown-item">
                            Business Desktop Deals
                          </a>
                        </div>
                      )}
                    </div>

                    <a href="#" className="dropdown-item">
                      Monitor Deals
                    </a>
                    <a href="#" className="dropdown-item">
                      Computer Accessories Deals
                    </a>
                    <a href="#" className="dropdown-item">
                      Dell Price Match
                    </a>

                    <div
                      className={`dropdown-item has-secondary ${
                        activeSecondaryPanel === "member-discounts"
                          ? "active"
                          : ""
                      }`}
                      onMouseEnter={() =>
                        handleSecondaryPanelHover("member-discounts")
                      }
                      onMouseLeave={() => handleSecondaryPanelHover(null)}
                    >
                      Member Discounts &gt;
                      {activeSecondaryPanel === "member-discounts" && (
                        <div className="dropdown-secondary-panel">
                          <a href="#" className="dropdown-item">
                            Employee Discounts
                          </a>
                          <a href="#" className="dropdown-item">
                            Student Discounts
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Expert Network
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell Professional Associations
                          </a>
                          <a href="#" className="dropdown-item">
                            Dell for Startups
                          </a>
                        </div>
                      )}
                    </div>

                    <a href="#" className="dropdown-item">
                      Dell Rewards
                    </a>
                    <a href="#" className="dropdown-item">
                      Laptop Buying Guide
                    </a>
                    <a href="#" className="dropdown-item">
                      Server Advisor
                    </a>
                  </div>
                </div>
              </div>

              <span className="navbar-link">Find a Store</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
