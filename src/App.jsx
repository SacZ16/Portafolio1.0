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
import Mongodb from './assets/tech/Mongodb'
import Postgresql from './assets/tech/Postgresql'
import zustandpng from "./assets/tech/zustand.png"
import Redux from './assets/tech/Redux'
import Nextjs from './assets/tech/Nextjs'
import Ts from './assets/tech/ts'
import Js from './assets/tech/Js'
import Express from './assets/tech/Express'
import SvgReact from './assets/tech/SvgReact'
import freelance from "./assets/experiencia/freelance.png"
import coderhouse from "./assets/experiencia/coderhouse.png"
import coally from "./assets/experiencia/coally.png"
import tekal from "./assets/experiencia/tekal.jpg"
function App() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString())
  const [theme, setTheme] = useState("dark")
  const [diaMarcado, setDiaMarcado] = useState(new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toLocaleString().split(",")[0].split("/").concat("semana0"))
  const [mes, setMes] = useState(mesJson.find((element) => element.mesNumero === JSON.parse(new Date().toLocaleString().split("/")[1]) && element.mesAño === JSON.parse(new Date().toLocaleString().split("/")[2].split(",")[0])))
  console.log("ggggh", mes)
  useEffect(() => {
    setTimeout(() => {
      setHora(new Date().toLocaleTimeString())
    }, (60000 - (`${hora.slice(-2)}` + "000")))
  }, [hora])

  return (
    <main className={`${style.main} ${theme === "dark" ? style.dark : style.light}`}>
      <section>
        <div className={`${style.configuracion} ${style.carta1} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1 className={theme === "dark" ? style.darkh1 : style.lighth1}>{new Date().toLocaleString().split(",")[0]}</h1>
          <h1>{hora.slice(0, -3)}</h1>
          <SwitchTheme setTheme={setTheme} theme={theme} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <div className={`${style.banderas} ${theme === "dark" ? style.dark : style.light}`}><Argentina /></div>
            <div className={`${style.banderas} ${theme === "dark" ? style.dark : style.light}`}><EEUU /></div>
            <div className={`${style.banderas} ${theme === "dark" ? style.dark : style.light}`}><Brasil /></div>
            <div className={`${style.banderas} ${theme === "dark" ? style.dark : style.light}`}><Italia /></div>
          </div>
        </div>
        <div className={`${style.perfil} ${style.carta2} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1 className={theme === "dark" ? style.darkh1 : style.lighth1}>Alexis Coronel</h1>
          <h3 style={{margin:'0',padding:'0'}}>Front End / Full stack(PERN & MERN)</h3>
          <div className={style.contenedorButtonsCarta2}>
            <div className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`}><Cv /> Curriculum</div>
            <div className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`}><Github /> Github</div>
            <div className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`}><Linkedin /> Linkedin</div>
          </div>
          <div className={`${style.buttonCarta2} ${theme === "dark" ? style.dark : style.light}`}><Mail /> alexiscoronel545@gmail.com</div>
        </div>
        <div className={`${style.calendario} ${style.carta3} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1 className={theme === "dark" ? style.darkh1 : style.lighth1}>Productividad</h1>
          <div style={{ width: '100%'}}>
            <div className={`${style.contenedorMes} ${theme === "dark" ? style.darkborder : style.lightborder}`}>
              <span style={mesJson.find((element) => element.mesNumero === (mes.mesNumero-1))?{cursor:'pointer'}:{backgroundColor:"#000000b5",cursor:'initial'}} onClick={()=>{mesJson.find((element) => element.mesNumero === (mes.mesNumero-1)) && setMes(mesJson.find((element) => element.mesNumero === (mes.mesNumero-1) ))}}>←</span>
              <span>{mes.mesNumero}/{mes.mesAño}</span>
              <span style={mesJson.find((element) => element.mesNumero === (mes.mesNumero+1))?{cursor:'pointer'}:{backgroundColor:"#000000b5",cursor:'initial'}} onClick={()=>{mesJson.find((element) => element.mesNumero === (mes.mesNumero+1)) && setMes(mesJson.find((element) => element.mesNumero === (mes.mesNumero+1) ))}}>→</span>
            </div>
            <div style={{marginTop:'5px'}} className={`${style.contenedorDias} ${theme === "dark" ? style.darkborder : style.lightborder}`}>
              <span style={{backgroundColor:'#999996',color:'white'}}>D</span>
              <span style={{backgroundColor:'#999996',color:'white'}}>L</span>
              <span style={{backgroundColor:'#999996',color:'white'}}>M</span>
              <span style={{backgroundColor:'#999996',color:'white'}}>M</span>
              <span style={{backgroundColor:'#999996',color:'white'}}>J</span>
              <span style={{backgroundColor:'#999996',color:'white'}}>V</span>
              <span style={{backgroundColor:'#999996',color:'white'}}>S</span>
            </div>
            <div className={`${style.contenedorDias} ${theme === "dark" ? style.darkborder : style.lightborder}`}>
              {mes.semana1.map(dia => {
                return (
                  <span key={dia.dia + mes.mes}
                    onClick={() => setDiaMarcado([dia.dia, mes.mesNumero, mes.mesAño, "semana1"])}
                    style={diaMarcado[0] == dia.dia && diaMarcado[1] == mes.mesNumero && diaMarcado[2] == mes.mesAño && ((diaMarcado[0] < 8 && diaMarcado[3] === "semana0") || diaMarcado[3] === "semana1") ? { backgroundColor: "#77dd77",cursor:'pointer',color:'black' } : {cursor:'pointer'}}
                  >{dia.dia}</span>
                )
              })}
            </div>
            <div className={`${style.contenedorDias} ${theme === "dark" ? style.darkborder : style.lightborder}`}>
              {mes.semana2.map(dia => {
                return (
                  <span key={dia.dia + mes.mes}
                    onClick={() => setDiaMarcado([dia.dia, mes.mesNumero, mes.mesAño, "semana2"])}
                    style={diaMarcado[0] == dia.dia && diaMarcado[1] == mes.mesNumero && diaMarcado[2] == mes.mesAño ? { backgroundColor: "#77dd77",cursor:'pointer',color:'black' } : {cursor:'pointer'}}
                  >{dia.dia}</span>
                )
              })}
            </div>
            <div className={`${style.contenedorDias} ${theme === "dark" ? style.darkborder : style.lightborder}`}>
              {mes.semana3.map(dia => {
                return (
                  <span key={dia.dia + mes.mes}
                    onClick={() => setDiaMarcado([dia.dia, mes.mesNumero, mes.mesAño, "semana3"])}
                    style={diaMarcado[0] == dia.dia && diaMarcado[1] == mes.mesNumero && diaMarcado[2] == mes.mesAño ? { backgroundColor: "#77dd77",cursor:'pointer',color:'black' } : {cursor:'pointer'}}
                  >{dia.dia}</span>
                )
              })}
            </div>
            <div className={`${style.contenedorDias} ${theme === "dark" ? style.darkborder : style.lightborder}`}>
              {mes.semana4.map(dia => {
                return (
                  <span key={dia.dia + mes.mes}
                    onClick={() => setDiaMarcado([dia.dia, mes.mesNumero, mes.mesAño, "semana4"])}
                    style={diaMarcado[0] == dia.dia && diaMarcado[1] == mes.mesNumero && diaMarcado[2] == mes.mesAño ? { backgroundColor: "#77dd77",cursor:'pointer',color:'black' } : {cursor:'pointer'}}
                  >{dia.dia}</span>
                )
              })}
            </div>
            <div className={`${style.contenedorDias} ${theme === "dark" ? style.darkborder : style.lightborder}`} style={{marginBottom:'5px'}}>
              {mes.semana5.map(dia => {
                return (
                  <span key={dia.dia + mes.mes}
                    onClick={() => setDiaMarcado([dia.dia, mes.mesNumero, mes.mesAño, "semana5"])}
                    style={diaMarcado[0] == dia.dia && diaMarcado[1] == mes.mesNumero && diaMarcado[2] == mes.mesAño && diaMarcado[3] === "semana5" ? { backgroundColor: "#77dd77",cursor:'pointer',color:'black' } : {cursor:'pointer'}}
                  >{dia.dia}</span>
                )
              })}
            </div>
            <div className={style.contenedorActividades}>
              {
                diaMarcado[3] === "semana0"
                  ?
                  mes[
                    diaMarcado[0] > 24 && diaMarcado[1] < mes.mesNumero
                      ?
                      "semana1"
                      :
                      diaMarcado[0] > 0 && diaMarcado[0] < 8
                        ?
                        "semana1"
                        :
                        diaMarcado[0] > 5?
                        "semana2":
                        diaMarcado[0] > 10?
                        "semana3":
                        diaMarcado[0] > 15?
                        "seamana4":
                        diaMarcado[0] > 20&&
                        "semana5"
                  ].map(e => {
                    if(e.dia == diaMarcado[0])
                    return (
                      <div>
                        {e.dia == diaMarcado[0] &&
                          e.actividad.map(er => {
                            return (
                              <p>
                                {er}
                              </p>
                            )
                          })
                        }
                      </div>
                    )
                  })
                  :
                  mes[diaMarcado[3]].map(e => {
                    if(e.dia == diaMarcado[0])
                    return (
                      <div>
                        {e.dia == diaMarcado[0] &&
                          e.actividad.map(er => {
                            return (
                              <p>
                                {er}
                              </p>
                            )
                          })
                        }
                      </div>
                    )
                  })
              }
            </div>
          </div>
        </div>
        <div className={`${style.sobreMi} ${style.carta5} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1 className={theme === "dark" ? style.darkh1 : style.lighth1}>Sobre mi</h1>
          <span style={{textAlign:'start'}}>+26 Meses de Experiencia en Full Stack Developer (MERN).
Mi objetivo es formar parte de una empresa en la que pueda desafiarme a mí mismo y mejorar día a día. Me motiva aprender nuevas habilidades y conocimientos para aportar ideas innovadoras, soluciones efectivas al equipo y a la empresa en general. Me considero una persona colaborativa, con una actitud proactiva y positiva hacia el trabajo en equipo, me encanta ver cómo la empresa crece y se desarrolla. En resumen, mi meta es ser parte de un equipo de trabajo exitoso y contribuir al éxito de la empresa.</span>
        </div>
        <div className={`${style.tecnologias} ${style.carta6} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1 className={theme === "dark" ? style.darkh1 : style.lighth1}>Tecnologias</h1>
          <div className={style.contenedorTecnologias}>
          <div className={theme === "dark" ? style.darksvgdivespecial : style.lightsvgdivespecial}><SvgReact/> ReactJs</div>
          <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Express/> Express</div>
          <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Ts/>TypeScript</div>
          <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Js/> JavaScript</div>
          <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Nextjs/> NextJs</div>
          <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Mongodb/> MongoDB</div>
          <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><img width={41} height={31} src={zustandpng}alt="algo"/>Zustand</div>
          <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Postgresql/> postgreSQL</div>
          <div className={theme === "dark" ? style.darksvgdiv : style.lightsvgdiv}><Redux/> Redux</div>
          </div>
        </div>
        <div className={`${style.habilidades} ${style.carta7} ${theme !== "dark" ? style.dark : style.light}`}>
          <h1 className={theme === "dark" ? style.darkh1 : style.lighth1}>Habilidades Blandas</h1>
              <div style={{display:'flex',flexDirection:'column',gap:'5px'}}>
                <div>Pensamiento critico</div>
                <div>Toma de decisiones</div>
                <div>Atencion al detalle</div>
                <div>Trabajo en equipo</div>
                <div>Autonomia</div>
              </div>
        </div>
        <div className={`${style.historial} ${style.carta8} ${theme !== "dark" ? style.dark : style.light}`}>
              <h1 className={theme === "dark" ? style.darkh1 : style.lighth1}>Experiencia trabajo</h1>
        <div className={style.contenedorTrabajo}>
            <img width={200} alt="coderhouse" src={coderhouse}/>
          <div className={style.contenedorTrabajoinfo}>
            <h3>CODER HOUSE</h3>
            <h3>12/2021 - Actualidad.</h3>
            <h4>Rol/Suplente del profesor: Tutor de FrontEnd, Backend y JavaScript</h4>
            <span>Actividad: Mi trabajo es corregir y mejorar el código.Ofrecer asistencia en caso de problemas.</span>
            <span>Ayude a más de 1.000 personas con problemas en vivo.</span>
            <span>Brindar acompañamiento técnico y emocional a lo largo del proceso de aprendizaje en programación.</span>
            <span>Más de 150 Estudiantes acompañados exclusivamente</span>
            <span>Mi objetivo es asegurar que el código final sea eficiente y efectivo para su uso previsto.</span>
            <span>Más de 2.700 Trabajos corregidos en tiempo y forma.</span>
        </div>
          </div>
        <hr width="100%"/>
        <div className={style.contenedorTrabajo}>
            <img width={200} alt="freelance" src={freelance}/>
          <div className={style.contenedorTrabajoinfo}>
            <h3>FREELANCER</h3>
            <h3>12/2022 - Actualidad.</h3>
            <h4>Rol: Full Stack</h4>
            <span>Diseño y Desarrollo de Aplicaciones Web Personalizadas</span>
            <span>Optimización de Rendimiento y Experiencia de Usuario</span>
            <span>Integración de Funcionalidades Avanzadas</span>
            <span>Gestión Efectiva del Ciclo de Desarrollo</span>
        </div>
        </div>
        <hr width="100%"/>
        <div className={style.contenedorTrabajo}>
            <img width={200} backgroundColor="white" alt="coally" src={coally}/>
          <div className={style.contenedorTrabajoinfo}>
            <h3>COALLY</h3>
            <h3>07/2021 - 11/2022</h3>
            <h4>Rol: Full Stack</h4>
            <span>Integración de Funcionalidades Avanzadas</span>
            <span>Actividad: Creación de componentes en frontend e implementación de pasarelas de pago en backend.Trabajo en equipo y sin supervisión</span>
        </div>
        </div>
        <hr width="100%"/>
        <div className={style.contenedorTrabajo}>
            <img width={200} alt="tekal" src={tekal}/>
          <div className={style.contenedorTrabajoinfo}>
            <h3>TEKAL/MEMORABLE</h3>
            <h3>06/2021 - 07/2021.</h3>
            <h4>Rol: Full Stack</h4>
            <span>Actividad: Colaboré en el desarrollo de un juego web que predice el impacto cognitivo de ciertos videos e imágenes, midiendo la memorabilidad de los mismos, tanto a corto como a largo plazo. con supervisión</span>
        </div>
          </div>
        <hr width="100%"/>
        </div>
      </section>
    </main>
  )
}

export default App
