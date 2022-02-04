import spinner from './assets/spinner.gif'

function Spinner() {
  return <div className='w-50 mt-20'>
    <img src={spinner} alt="loading..." className='w-50 text-center mx-auto' width={100} />
  </div>;
}

export default Spinner;
