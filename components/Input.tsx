import { VscGitFetch } from "react-icons/vsc";
import { AiOutlineLoading } from "react-icons/ai";


export const SearchInput = () => {
    return (
        <form className="searh-input" onSubmit={(e) => {
            e.preventDefault();
        }}>
            <div className="input">
                <input type="url" placeholder="Paste your link here" />
            </div>
            <button className="submit">
                <VscGitFetch />
            </button>
        </form>
    )
}