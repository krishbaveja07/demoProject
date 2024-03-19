import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef: any = createNavigationContainerRef();

export const dispatch = (resetAction: any) => {
  navigationRef.current?.dispatch(resetAction);
};
