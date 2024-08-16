import {useEffect, useState, useContext} from 'react';
import clsx from 'clsx';
import {CoinListContext} from '../../../contexts/CoinListContext';

// eslint-disable-next-line react/prop-types
const Item = ({borderColor, valueStr, keyStr}) => {
  const [toggle, setToggle] = useState (null);
  const {selectedCoinList, setSelectedCoinList} = useContext (CoinListContext);

  useEffect (
    () => {
      for (let coin of selectedCoinList) {
        if (coin === keyStr) {
          setToggle (true);
          return;
        }
      }
      setToggle (false);
    },
    [selectedCoinList]
  );

  const initialize = () => {
    console.log (selectedCoinList, keyStr, toggle);
    if (!toggle) {
      if (selectedCoinList.indexOf (keyStr) !== -1) return;
      let tmp = selectedCoinList;
      tmp = tmp.filter (coin => coin !== keyStr);
      tmp.push (keyStr);
      setSelectedCoinList (tmp);
    } else {
      if (selectedCoinList.indexOf (keyStr) === -1) return;
      let tmp = selectedCoinList;
      tmp = tmp.filter (coin => coin !== keyStr);
      setSelectedCoinList (tmp);
    }
    setToggle (!toggle);
  };

  // useEffect (() => {
  //     initialize ()
  // }, [initialize])

  return (
    <li>
      <a
        className={clsx (
          `flex flex-row items-center px-4 py-2 group ${toggle ? 'font-bold text-secondary' : 'font-medium text-v3-primary'} hover:text-secondary cursor-pointer`
        )}
        onClick={() => {
          initialize ();
        }}
      >
        {
          // eslint-disable-next-line react/self-closing-comp
          <div
            className={clsx (
              `w-[6px] h-[6px] rounded-full mr-2 border ${toggle ? 'scale-166' : 'scale-100 group-hover:scale-133'}`
            )}
            style={{
              borderColor: borderColor,
              backgroundColor: toggle ? borderColor : 'transparent',
            }}
          />
        }
        {valueStr}
      </a>
    </li>
  );
};

export default Item;
