import { Menu } from './menu/Menu'
import { Preview } from './preview/Preview'
import './styles/wrapper.scss'

export const Wrapper = () => {
    return (
        <main>
            <section className="wrapper_menu">
                <Menu />
            </section>
            <section className="wrapper_screen">
                <Preview />
            </section>
        </main>
    )
}