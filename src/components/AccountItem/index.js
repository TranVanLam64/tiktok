import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames/bind"
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2e5fd25fc5943f9e36cc7bc05c36ad2d~c5_100x100.jpeg?x-expires=1660662000&x-signature=8OZfqqpq1f4bN6K8rnsLOeBuk7Y%3D"
        alt="hoa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  )
}

export default AccountItem
