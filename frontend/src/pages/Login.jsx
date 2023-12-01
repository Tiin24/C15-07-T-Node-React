import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='flex h-screen w-full items-start'>
      <article className='lg:flex h-full w-1/2 bg-neutral hidden'>
        <img
          src='https://www.publicdomainpictures.net/pictures/370000/velka/tall-building-windows.jpg'
          className='h-full w-full object-cover'
        />
      </article>
      <article className='flex h-full w-full lg:w-1/2 flex-col justify-between bg-[base-100] p-28 mx-auto'>
        <h1 className='mb-2 text-xl font-semibold text-black'>
          Condominio
        </h1>

        <div className='flex w-full max-w-[550px] flex-col'>
          <div className='mb-2 flex w-full flex-col'>
            <h3 className='mb-4 text-3xl font-semibold'>Iniciar sesión</h3>
            <p className='mb-2 text-base'>
              Bienvenido! Por favor, ingresa tus credenciales.
            </p>
          </div>

          <div className='flex w-full flex-col'>
            <input
              type='email'
              placeholder='Correo'
              className='input w-full input-bordered input-primary my-2'
            />
          </div>

          <div className='flex w-full flex-col'>
            <input
              type='password'
              placeholder='Contraseña'
              className='input w-full input-bordered input-primary my-2'
            />
          </div>

          <div className='flex w-full items-center justify-between'>
            <div className='flex w-full items-center'>
              <input id='remember' type='checkbox' className='mr-2 checkbox checkbox-primary' />
              <label htmlFor='remember' className='text-sm'>Recordar</label>
            </div>

            <p className='cursor-pointer whitespace-nowrap text-sm font-medium underline underline-offset-2 hover:text-accent'>
              ¿Olvidaste la contraseña?
            </p>
          </div>

          <div className='my-4 flex w-full flex-col'>
            <button className='my-2 flex w-full btn btn-primary p-4'>
              Iniciar sesión
            </button>
            <button className='my-2 flex w-full p-4 btn btn-accent'>
              Registro
            </button>
          </div>
        </div>

        <div className='flex w-full items-center justify-center'>
          <p className='text-sm font-normal text-black hover:underline hover:text-accent'>
            {/* Dont have account?{' '}
            <span className='cursor-pointer font-semibold underline underline-offset-2'>
              {' '}
              Sign up for free
            </span> */}
            <Link to="/contact">Contactar con la administración</Link>
          </p>
        </div>
      </article>
    </section>
  );
}

export default Login;
