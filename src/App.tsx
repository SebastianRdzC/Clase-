import { useState } from 'react';
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Separator } from './components/ui/separator'
import { Atom, Eye, EyeOff } from 'lucide-react';
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className='flex  items-center h-screen w-screen relative font-[Montserrat] bg-[#fff] overflow-hidden'>
        <div className='w-full h-full flex justify-center items-center'>

          <div className=' h-screen w-screen absolute bg-black/90  ' />
          <div className='bg-white/20 w-80 h-80 absolute rounded-full -bottom-10 -left-10 blur-3xl' />
          <div className='bg-white/20 w-80 h-80 absolute rounded-full -top-10 -right-10 blur-3xl' />
          <div className=' backdrop-filter backdrop-blur-xl z-0 h-screen w-screen absolute bg-black/10  ' />
          <div className=' z-0 text-white h-auto w-120 flex flex-col justify-start p-12 gap-5 rounded-xl relative'>

            <div className='z-1 flex flex-col justify-between items-center w-full gap-4'>
              <Atom className='z-1 text-white animate-spin duration-2000'
                strokeWidth={.8}
                style={{
                  animationDuration: "2000ms"
                }}
              />
              <h1 className='inline-flex text-3xl  z-1 tracking-wider text-white'>
                Bienvenido de vuelta
              </h1>
              <span className='text-sm inline-flex z-1 text-white/60'>
                Inicia sesión para continuar
              </span>

            </div>
            <form action="" className='flex flex-col w-full h-full justify-start mt-5 gap-3'>
              <label htmlFor="email" className='inline-flex z-1 tracking-wider text-sm text-white/85'>Email</label>
              <Input
                id="email"
                type="text"
                placeholder="Ejemplo@123.com"
                className='border-white/10 z-1 bg-[#1c1c1e] text-sm rounded-xl shadow-none ring-0
                text-white placeholder:text-white/60 focus:border-white/70
                 transition-all duration-200 hover:border-white/60'

              />

              <label htmlFor="password" className='inline-flex z-1 tracking-wider text-sm text-white/85'>Contraseña</label>
              <div className="relative z-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Escribe tu contraseña"
                  className='border-white/10 text-sm rounded-xl autofill:bg-[#1c1c1e] autofill:shadow-[inset_0_0_0px_1000px_white]"
                  bg-[#1c1c1e] text-white placeholder:text-white/60
                  focus:border-white/70 focus:ring-2 focus:ring-white/20 
                  transition-all duration-200 hover:border-white/60 pr-12'
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className='mt-2 flex flex-col gap-3'>
                <span className='text-sm inline-flex z-1 text-white/70 cursor-pointer hover:text-white/85 transition-colors duration-200'>
                  ¿Olvidaste tu contraseña?
                </span>
              </div>
              <div className='mt-3 w-full flex flex-col justify-start items-center gap-3 divider'>
                <Button className='w-full bg-white text-black rounded-xl hover:text-black hover:bg-white
                 cursor-pointer hover:shadow-md hover:shadow-white/20
                  transition-all duration-200' variant={'default'} >
                  Inicia Sesión
                </Button>
                <div className="flex items-center gap-4 w-full">
                  <Separator className="flex-1 bg-white/20" />
                  <span className="text-white">o</span>
                  <Separator className="flex-1 bg-white/20" />
                </div>
                <Button className='bg-transparent w-full border border-white/10 rounded-xl hover:bg-transparent hover:border-white/20
                 cursor-pointer text-white/80 hover:text-white transition-all duration-200' variant={"ghost"}>
                  Registrate
                </Button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App