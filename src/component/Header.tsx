import { FaGlobe } from "react-icons/fa";
import { TbBellRinging } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <header>
      <h1 className="header-title">牙技財務暨設備管理平台</h1>
      <div className="icon-group">
        <div className="icon-container">
          <FaGlobe />
        </div>
        <div className="icon-container">
          <TbBellRinging />
        </div>
      </div>
      <div className="user-info">
        <span>
          牙技平台管理人-0001145e-e41d-433a-be1e-a9b5496c1cb4
          <br />
          user_account_title_mr
        </span>
        <div className="icon-container">
          <IoIosArrowDown />
        </div>
      </div>
    </header>
  );
}

export default Header;
