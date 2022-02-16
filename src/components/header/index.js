import { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/guthub-hooks";

const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState("");

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder="Digite o username para pesquisar ..." onChange={(e) => setUsernameForSearch(e.target.value)} />
                <button type="button" onClick={submitGetUser}><span>Buscar</span></button>
            </S.Wrapper>
        </header>
    )
}

export default Header;