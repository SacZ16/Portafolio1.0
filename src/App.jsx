import { useEffect, useState } from 'react'
import style from "./app.module.css"
import SwitchTheme from './SwitchTheme'
import Cv from './assets/Cv.jsx'
import Italia from './assets/italia'
import EEUU from './assets/EEUU'
import Brasil from './assets/Brasil'
import Argentina from './assets/Argentina'
import Github from './assets/Github'
import Mail from './assets/Mail'
import Linkedin from './assets/Linkedin'
import mesJson from "./calendario/calendario.json"
function App() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString())
  const [theme, setTheme] = useState("dark")
  const [diaMarcado, setDiaMarcado] = useState(new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toLocaleString().split(",")[0].split("/").concat("semana0"))
  const [mes, setMes] = useState(mesJson.find((element) => element.mesNumero === JSON.parse(new Date().toLocaleString().split("/")[1]) && element.mesAño === JSON.parse(new Date().toLocaleString().split("/")[2].split(",")[0])))
  console.log("ggggh", diaMarcado)
  useEffect(() => {
    setTimeout(() => {
      setHora(new Date().toLocaleTimeString())
    }, (60000 - (`${hora.slice(-2)}` + "000")))
  }, [hora])

  return (
    <main className={`${style.main} ${theme === "dark" ? style.dark : style.light}`}>
      <section>
        <div className={`${style.configuracion} ${style.carta1} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1>{new Date().toLocaleString().split(",")[0]}</h1>
          <h1>{hora.slice(0, -3)}</h1>
          <SwitchTheme setTheme={setTheme} theme={theme} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <div className={`${style.banderas} ${theme === "dark" ? style.dark : style.light}`}><Argentina /></div>
            <div className={`${style.banderas} ${theme === "dark" ? style.dark : style.light}`}><Brasil /></div>
            <div className={`${style.banderas} ${theme === "dark" ? style.dark : style.light}`}><Italia /></div>
            <div className={`${style.banderas} ${theme === "dark" ? style.dark : style.light}`}><EEUU /></div>
          </div>
        </div>
        <div className={`${style.perfil} ${style.carta2} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1>Alexis Coronel</h1>
          <div className={style.contenedorButtonsCarta2}>
            <div className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`}><Cv /> Curriculum</div>
            <div className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`}><Github /> Github</div>
            <div className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`}><Linkedin /> Linkedin</div>
          </div>
          <div className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`}><Mail /> alexiscoronel545@gmail.com</div>
        </div>
        <div className={`${style.calendario} ${style.carta3} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1>Productividad</h1>
          <div>
            <div>
              <span>←</span>
              <span>{new Date().toLocaleString().split("/")[1]}/</span>
              <span>{new Date().toLocaleString().split("/")[2].split(",")[0]}</span>
              <span>→</span>
            </div>
            <div className={style.contenedorDias}>
              <span>D</span>
              <span>L</span>
              <span>M</span>
              <span>M</span>
              <span>J</span>
              <span>V</span>
              <span>S</span>
            </div>
            <div className={style.contenedorDias}>
              {mes.semana1.map(dia => {
                return (
                  <span key={dia.dia + mes.mes}
                  onClick={()=>setDiaMarcado([dia.dia,mes.mesNumero,mes.mesAño,"semana1"])}
                    style={diaMarcado[0] == dia.dia && diaMarcado[1] == mes.mesNumero && diaMarcado[2] == mes.mesAño && (diaMarcado[0] <8 || diaMarcado[3]==="semana1")? { backgroundColor: "green" } : {}}
                  >{dia.dia}</span>
                )
              })}
            </div>
            <div className={style.contenedorDias}>
              {mes.semana2.map(dia => {
                return (
                  <span key={dia.dia + mes.mes}
                  onClick={()=>setDiaMarcado([dia.dia,mes.mesNumero,mes.mesAño,"semana2"])}
                    style={diaMarcado[0] == dia.dia && diaMarcado[1] == mes.mesNumero && diaMarcado[2] == mes.mesAño ? { backgroundColor: "green" } : {}}
                  >{dia.dia}</span>
                )
              })}
            </div>
            <div className={style.contenedorDias}>
              {mes.semana3.map(dia => {
                return (
                  <span key={dia.dia + mes.mes}
                  onClick={()=>setDiaMarcado([dia.dia,mes.mesNumero,mes.mesAño,"semana3"])}
                    style={diaMarcado[0] == dia.dia && diaMarcado[1] == mes.mesNumero && diaMarcado[2] == mes.mesAño ? { backgroundColor: "green" } : {}}
                  >{dia.dia}</span>
                )
              })}
            </div>
            <div className={style.contenedorDias}>
              {mes.semana4.map(dia => {
                return (
                  <span key={dia.dia + mes.mes}
                  onClick={()=>setDiaMarcado([dia.dia,mes.mesNumero,mes.mesAño,"semana4"])}
                    style={diaMarcado[0] == dia.dia && diaMarcado[1] == mes.mesNumero && diaMarcado[2] == mes.mesAño ? { backgroundColor: "green" } : {}}
                  >{dia.dia}</span>
                )
              })}
            </div>
            <div className={style.contenedorDias}>
              {mes.semana5.map(dia => {
                return (
                  <span key={dia.dia + mes.mes}
                  onClick={()=>setDiaMarcado([dia.dia,mes.mesNumero,mes.mesAño,"semana5"])}
                    style={diaMarcado[0] == dia.dia && diaMarcado[1] == mes.mesNumero && diaMarcado[2] == mes.mesAño && diaMarcado[3]==="semana5"? { backgroundColor: "green" } : {}}
                  >{dia.dia}</span>
                )
              })}
            </div>
            <div>
              {
                diaMarcado[3]==="semana0"?
                mes[diaMarcado[0]>24&&diaMarcado[1]<mes.mesNumero?"semana1":
                diaMarcado[0]>0&&diaMarcado[0]<8?"semana1":
                "semana2"].map(e=>{return(
                  <div>
                 { e.dia==diaMarcado[0] &&
                    e.actividad.map(er=>{return(
                      <p>
                        {er}
                      </p>
                    )})
                    }
                  </div>
                )})
                :
                mes["semana1"].map(e=>{return(
                  <div>
                 { e.dia==diaMarcado[0] &&
                    e.actividad.map(er=>{return(
                      <p>
                        {er}
                      </p>
                    )})
                    }
                  </div>
                )})
              }
            </div>
          </div>
        </div>
        <div className={`${style.sobreMi} ${style.carta5} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1>Sobre mi</h1>
        </div>
        <div className={`${style.tecnologias} ${style.carta6} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1>Tecnologias</h1>
        </div>
      </section>
    </main>
  )
}

export default App
