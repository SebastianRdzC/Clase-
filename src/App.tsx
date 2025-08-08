import { useState } from 'react';
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Atom, Eye, EyeOff } from 'lucide-react';
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const height=50
  return (
    <>
      <div className='flex  items-center h-screen w-full relative font-[Montserrat] bg-[#2e3136]'>
        <div className='flex-1 w-full h-full flex justify-center items-center'>
          <div className=' backdrop-filter backdrop-blur-xl z-0 text-white
        h-120 w-120 flex flex-col justify-start p-12 gap-5 rounded-xl relative'>


            <div className='z-1 flex justify-between items-center w-full'>
              <h1 className='inline-flex text-3xl  z-1 tracking-wider text-white'>
                Login
              </h1>
              <Atom className='z-1 text-white animate-spin duration-2000'
                strokeWidth={.8}
                style={{
                  animationDuration: "2000ms"
                }}
              />
            </div>
            <form action="" className='flex flex-col w-full h-full justify-start mt-5 gap-5'>
              <label htmlFor="email" className='inline-flex z-1 tracking-wider text-sm text-white/85'>Email</label>
              <Input
                id="email"
                type="text"
                placeholder="Ejemplo@123.com"
                className='border-white/50 z-1 bg-white/5
                text-sm
                text-white placeholder:text-white/60 focus:border-white/70
                focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:border-white/60'
              />

              <label htmlFor="password" className='inline-flex z-1 tracking-wider text-sm text-white/85'>Password</label>
              <div className="relative z-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Escribe tu contraseña"
                  className='border-white/50
                  text-sm
                  bg-white/5 text-white placeholder:text-white/60
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
                <span className='text-sm inline-flex z-1 text-white/70 cursor-pointer hover:text-white/85 transition-colors duration-200'>
                  ¿No tienes una cuenta?
                </span>
              </div>

              <Button className='bg-transparent border border-white/50
             z-1 mt-3 hover:bg-transparent hover:border-white/70 cursor-pointer
              text-white/80 hover:text-white
              hover:shadow-md hover:shadow-white/20
              transition-all duration-200
              ' variant={"ghost"}>
                Inicia Sesión
              </Button>
            </form>
          </div>
        </div>
        <div className='flex-1 bg-black w-full h-full relative'>
          <div className='absolute top-0  w-[1px] h-50 bg-white/20 left-1/2 transform -translate-x-1/2' />
          <div className='absolute top-50 bg-white/10 w-4 h-7 left-1/2 transform -translate-x-1/2 rounded-[10%]'>
            <div className='w-full bg-white/10 h-[1px] top-1 absolute' />
            <div className='w-full bg-white/10 h-[1px] top-2 absolute' />
            <div className='w-full bg-white/10 h-[1px] top-3 absolute' />
            <div className='w-full bg-white/10 h-[1px] top-4 absolute' />
            <div className='w-full bg-white/10 h-[1px] top-5 absolute' />
            <div className='w-full bg-white/10 h-[1px] top-6 absolute' />
          </div>
          <div className='absolute top-57 bg-white h-8 w-8 left-1/2 transform -translate-x-1/2 rounded-full' />
          <div className='absolute top-57 bg-white h-8 w-8 left-1/2 transform -translate-x-1/2 rounded-full blur' />
          <div className='absolute top-57 bg-white h-15 w-15 left-1/2 transform -translate-x-1/2 rounded-full blur-3xl' />

          




        </div>


      </div>
    </>
  )
}

export default App