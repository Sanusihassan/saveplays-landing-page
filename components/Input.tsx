import { VscGitFetch } from "react-icons/vsc";
import { AiOutlineLoading } from "react-icons/ai";


export const SearchInput = ({ placeholder }: { placeholder: string }) => {
    return (
        <form className="searh-input" onSubmit={(e) => {
            e.preventDefault();
        }}>
            <div className="input">
                <input type="url" placeholder={placeholder} />
            </div>
            <button className="submit">
                <VscGitFetch />
            </button>
        </form>
    )
}