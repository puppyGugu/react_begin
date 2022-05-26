- Q1. 평균 평점 state를 메인 컴포넌트에 두셨나요, 하위 컴포넌트인 평균 평점 컴포넌트에 두셨나요?
(state와 props 개념을 떠올려 보세요)

A. App.js에서 라우팅으로 전체를 다른 파일로 뺐으나, 평점 컴포넌트 자체는 메인 컴포넌트와 묶어서 진행 했다.


- 선택하신 방식의 장단점은 무엇이라 생각하시나요?

A. 장점: 컴포넌트가 묶여있어서 한 페이지에서 알아보기 쉽다.
단점: 컴포넌트가 분리가 덜 되어 있다.


- 평균 평점과 리셋 버튼을 추가할 때 어떤 고민을 하셨나요?

A. 평균 평점이 각 해당 요일의 평균 값을 받아와야 하는데, 그렇게 되면 각 요일의 평점 숫자를 어떻게 스타일로 바꿀지가 감이 안왔다.
리셋 버튼은 평균 평점이 완성 되면, 그 값을 0으로 바꿔주는 작업으로 보이는데, 평균 평점에서 막혀서 진행을 더 할 수가 없었다.


- Q2. 과제 구현 간, 상태관리를 위해 useState를 사용해보고 배운 점을 적어주세요.

A. useState가 부모의 데이터를 가져와서 동적으로 처리 해준다는 부분은 이해 했는데, 그걸 적용하려고 하니 코드를 어떻게 짜야할지가 고민이었다.
함수형 컴포넌트에서 클래스형 컴포넌트처럼 상태 관리를 하게 해준다는 점이 장점으로 배웠다.


- Q3. 랜덤 숫자가 아닌 평점 남기기 페이지에서 입력한 숫자를 반영하기 위해서는 어떻게 해야 할까요?

A. 평점 남기기 페이지의 값을 저장해서 다시 부모 컴포넌트로 넘겨줘야 할 것이다.


- **잘 구현되지 않은 부분이 있다면 어떤 것 때문이었을까요?**

A. 우선 각 요일의 평점을 나타내는 숫자를 스타일에 적용하여 나타나게 하는 부분에서 막혔고, 자연스럽게 그 다음 단계인 해당 요일을 일주일이 되게끔 늘리는 개념도 정확하게 인지가 되지 않았다.


- 평점 남기기 페이지에서 입력한 숫자가 반영이 잘 되지 않았을거에요! 우리의 데이터를 저장할 공간이 없기 때문이죠!    
→ 지금의 불편함을 꼭 기억해주세요. 다음 단계로 이 불편함을 해결해주기 위한 툴들을 배우게 될 것입니다.



<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
 -->
