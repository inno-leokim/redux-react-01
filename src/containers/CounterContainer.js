import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
 
  //   const { number, diff } = useSelector(state => ({
  //     number: state.counterReducer.number,
  //     diff: state.counterReducer.diff
  //   }));
  // ==> warning이 발생했다. Selector unknown returned the root state when called. This can lead to unnecessary rerenders
  // ==> useSelector를 사용시에 한번에 하나의 state만 가져와야 한다. 따라서 아래와 같이 수정
  // ==> 참고 블로그
  // https://velog.io/@keynene/ErrorTypeScript-Redux-useSelector.js76-Selector-unknown-returned-the-root-state-when-called.-This-can-lead-to-unnecessary-rerenders.-%EB%B6%88%ED%95%84%EC%9A%94%ED%95%9C-%EB%A0%8C%EB%8D%94%EB%A7%81%EC%9D%B4-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0.-useSelector-%EB%B2%94%EC%9C%84%EC%A7%80%EC%A0%95

  //   const { number, diff } = useSelector(state => state.counterReducer); //전체를 받는 건 비효율적 이다.
  
  //  => 따로 각각 받는 방법도 있지만 state가 많을 경우 비효율적이다.
  //   const number = useSelector(state => state.counter.number);
  //   const diff = useSelector(state => state.counter.diff);
  
    const { number, diff } = useSelector(state => ({
        number: state.counterReducer.number,
        diff: state.counterReducer.diff
    }), shallowEqual); // shallowEqual은 이전 값과 다음 값을 비교하여 true가 나오면 리렌더링을 하지 않고 false가 나오면 리렌더링

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
    // <div>확인</div>
  );
}

export default CounterContainer;