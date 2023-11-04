import { setFPSColors } from './calculate-fps-color';

type StapleProps = {
  value: number
}

const Staple = ({value = 0}: StapleProps) => {
  console.log(value)

    const calculatedBarValue = (Math.floor((value / 400) * 100))
    const calculatedBarValueCSS = calculatedBarValue + '%'

    const color = setFPSColors(value)

  return (
      <div className={`bar ${color}`} style={{height: calculatedBarValueCSS, backgroundColor: color}}><span className='number'>{Math.round(value)}</span></div>
  );
};

export default Staple;