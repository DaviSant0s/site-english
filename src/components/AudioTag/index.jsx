import './styles.css';

export default function AudioTag({id}) {
  return (
    <audio id={id} className='AudioTag-component' src='' controls autoPlay></audio>
  )
}
