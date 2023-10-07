import style from "../../assets/styles/modules/app_topbar.module.css"
import Link from "next/link"
function AuthTopBar() {
  return (
    <div className={style.app_topbar}>
        <Link className={style.logo} href="/">Sprinter</Link>

      <Link href="/">Back</Link>

    </div>
  )
}

export default AuthTopBar
