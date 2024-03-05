import { useEffect, useRef, useState } from "react";
import useEventListener from "./useEventListener";

export default function useClickOutSide() {

  const ref_Out = useRef();
  
  const [ bool_Out, setBool_Out ] = useState(null);
  const [ condition_Out, setCondition_Out ] = useState(true);

  
  const handleClickOutSide = (e) => {
    if(ref_Out.current && condition_Out){
      if(!ref_Out.current.contains(e.target)){
        /* console.log('fora'); */
        setBool_Out(true);
      } else{
        /* console.log('dentro'); */
        setBool_Out(false);
      }
    }
    
  }
  
  useEventListener('click', handleClickOutSide, [bool_Out, condition_Out]);

  //restaura o bool_Out
  useEffect(() => {
    if(condition_Out === false){
      /* console.log('Restaurando o bool_Out'); */
      setBool_Out(() => null);
    }

  }, [condition_Out]);


  return [bool_Out, ref_Out, setCondition_Out];
}
