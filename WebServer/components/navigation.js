class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        .menuContainer {
            background-color: #363636;
            padding: 10px 0;
            display: flex;
            justify-content: center;
            margin-top: 30px;
            }
            
            .menu {
              border: 1px solid #575757;
              border-radius: 10px;
              width: 900px;
              display: flex;
              justify-content: space-between;
              color: white;
              padding: 5px 20px 5px 20px;
            }
            .active {
                border-bottom: 1px solid #f6416c;
              }
              .links {
                display: flex;
                justify-content: flex-end;
              }
              
              .tracker {
                margin-left: 20px;
              }
        </style>


            <div class="menuContainer">
        <div class="menu">
            <div class="home active">Home</div>
            <div class="links">
                <div class="pvpKD">Crucible K/D</div>
                <div class="tracker">Destiny Tracker</div>
            </div>
        </div>
    </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);