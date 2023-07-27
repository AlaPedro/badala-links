import React, { useState } from "react"
import Switch from "react-switch"

import { Inter } from "next/font/google"
import Image from "next/image"
import { Github, Mail, SendHorizonal, FileText } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    const [checked, setChecked] = useState(false)
    const handleChange = (nextChecked) => {
        setChecked(nextChecked)
    }
    return (
        <div
            data-checked={checked}
            className={`flex flex-col justify-center gap-20 bg-slate-200 py-4 h-screen data-[checked=true]:bg-zinc-900 ${inter.className}`}
        >
            <div className="flex flex-col items-center gap-1">
                <div className="w-28 h-28 rounded-full overflow-hidden flex items-center border-4 border-zinc-400 shadow-md drop-shadow-md">
                    <Image
                        src={"/img/badala.jpg"}
                        width={200}
                        height={100}
                        alt="ala pedro imagem"
                    />
                </div>
                <p
                    data-checked={checked}
                    className="text-black font-medium text-lg data-[checked=true]:text-white"
                >
                    @alaplc
                </p>
                <div>
                    <Switch
                        className="shadow-md drop-shadow-md"
                        onChange={handleChange}
                        checked={checked}
                        offColor="#ffb8ca"
                        onColor="#363636"
                        offHandleColor="#f1f1f1"
                        onHandleColor="#262626"
                        uncheckedIcon={""}
                        uncheckedHandleIcon={
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    fontSize: 15,
                                }}
                            >
                                ☀️
                            </div>
                        }
                        checkedIcon={""}
                        checkedHandleIcon={
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    fontSize: 15,
                                }}
                            >
                                🌕
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <a
                    href="https://github.com/AlaPedro"
                    target="_blank"
                    className="flex w-4/5 h-20 items-center justify-center bg-rose hover:bg-rosedark transition-all rounded-md shadow-md drop-shadow-md gap-2 max-w-[800px]"
                >
                    Acessar GitHub <Github size={20} color="#000" />
                </a>
                <a
                    href="https://alapedro.dev/"
                    target="_blank"
                    className="flex w-4/5 h-20 items-center justify-center bg-rose hover:bg-rosedark transition-all rounded-md shadow-md drop-shadow-md gap-2 max-w-[800px]"
                >
                    Acessar Portifólio <FileText size={20} color="#000" />
                </a>
                <a
                    href="https://api.whatsapp.com/send/?phone=5575992363468&text=Al%C3%A3+Pedro+vi+seu+portif%C3%B3lio+e+quero+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"
                    target="_blank"
                    className="flex w-4/5 h-20 items-center justify-center bg-rose hover:bg-rosedark transition-all rounded-md shadow-md drop-shadow-md gap-2 max-w-[800px]"
                >
                    Entrar em contato via Whatsapp
                    <SendHorizonal size={20} color="#000" />
                </a>
                <a
                    href="mailto:alanpedro@gmail.com"
                    target="_blank"
                    className="flex w-4/5 h-20 items-center justify-center bg-rose hover:bg-rosedark transition-all rounded-md shadow-md drop-shadow-md gap-2 max-w-[800px]"
                >
                    Entrar em contato via Email <Mail size={20} color="#000" />
                </a>
            </div>
        </div>
    )
}
