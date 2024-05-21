import KeyFrame from '../../components/KeyFrame';
import ButtonTap from '../ButtonTap';
import Counter from '../motionValue/Counter';
import ScrollReveal from '../Scroll/ScrollReveal';
import Simple from '../Simple';
import Test from '../Test';

export default function AnimationPage ()
{
  return (
    <div>
      <div className="flex gap-10 justify-center items-center p-10">
        <KeyFrame />
        <Simple />
        <ButtonTap text={ "Tap Me!" } />
        <Test />
      </div>
      <div className='w-fit mx-auto px-10'>
        <Counter />
      </div>
      <div>
        <ScrollReveal/>
      </div>
    </div>
  )
}