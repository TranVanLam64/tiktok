import { useEffect, useState } from "react"
import classNames from "classnames/bind"
import styles from "./Header.module.scss"
import images from "../../../../assets/images"
import { Wrapper as PopperWrapper} from '../../Popper'
import Tippy from "@tippyjs/react/headless"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons"
import AccountItem from "../../../AccountItem"

const cx = classNames.bind(styles)

function Header() {
  const [ searchResult, setSearchResult ] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  })

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="logo" />
        <Tippy
          visible={searchResult.length>0}
          interactive={true}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx('search-title')}>Account</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search account and video" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <button>
              <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            </button>

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx("action")}></div>
      </div>
    </header>
  )
}

export default Header
