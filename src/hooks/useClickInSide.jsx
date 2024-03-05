import { useEffect, useRef, useState } from "react";
import useEventListener from "./useEventListener";

export default function useClickInSide() {

  const ref_In = useRef();
  
  const [ bool_In, setBool_In ] = useState(null);
  const [ condition_In, setCondition_In ] = useState(true);

  
  const handleClickInSide = (e) => {
    if(ref_In.current && condition_In){
      if(!ref_In.current.contains(e.target)){
        console.log('fora');
        setBool_In(true);
      } else{
        console.log('dentro');
        setBool_In(false);
      }
    }
    
  }
  
  useEventListener('click', handleClickInSide, [bool_In, condition_In]);

  //restaura o bool_In
  useEffect(() => {
    if(condition_In === false){
      console.log('Restaurando o bool_In');
      setBool_In(() => null);
    }

  }, [condition_In]);


  return [bool_In, ref_In, setCondition_In];
}
