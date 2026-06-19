import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import "./Dashboard.css"

export default function Dashboard() {
    const [name, setName] = useState<string>("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const tokenDecodificado = jwtDecode<any>(token);

                const chaveDoNome = Object.keys(tokenDecodificado).find(key =>
                    key.toLowerCase().includes('name') && !key.toLowerCase().includes('nameidentifier')
                );

                // Se encontrar a chave, extrai o valor correspondente
                const nomeDoBackEnd = chaveDoNome ? tokenDecodificado[chaveDoNome] : null;
                setName(nomeDoBackEnd);

            } catch (error) {
                console.log("Erro ao decodificar token:", error);
                setName("Erro no Token");
            }
        } else {
            setName("Visitante");
        }

    }, []);


    return (
        <div className="containerDashboard">
            <header className="headerDashboard">
                <div className="campoTitulo">
                    <h1>Olá, {name}! Seja bem-vindo(a).</h1>
                    <span>Gerencie suas atividades com facilidade</span>
                </div>
                <div className="campoNotButon">
                    <div className="campBotaoRegistro">
                        <button className="campoBotaoBackElement"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF0000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg></Link></button>
                    </div>
                </div>

            </header>

            <nav>
                <div className="campoParteLogo">
                    <div className="CampoLogo">
                        <div className="campoLogoRegistro">
                            <p>A</p>
                        </div>
                        <div className="cardRegistroTitle">
                            <h2>Login System</h2>
                        </div>
                    </div>
                </div>
                <div className="campoOpcoes">
                    <ul>
                        <li> <i className="ti ti-users"></i><Link to="/user-all">Ver Usuários</Link></li>
                        <li><Link to="/searchEmail">Localizar Usuário</Link></li>
                    </ul>
                </div>
            </nav>

            <main className="mainDashboard">
            
            </main>


        </div>
    );
}
