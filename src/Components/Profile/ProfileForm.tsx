import { useViewportScroll } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import {
  FaceImg,
  ProfileBox,
  LanguageImg,
  ProfileContainer,
  ProfileBoxWrap,
  ProfileTitle,
  ProfileSubTitle,
  ProfileItemWrap,
} from "./ProfileForm.style";

const ProfileForm = () => {
  const { scrollY } = useViewportScroll();

  return (
    <ProfileContainer>
      <ProfileBoxWrap>
        <Fade direction="right">
          <ProfileTitle>Profile</ProfileTitle>
        </Fade>
        <Fade direction="right" delay={100}>
          <ProfileSubTitle>저를 소개합니다.</ProfileSubTitle>
        </Fade>
        <ProfileItemWrap>
          <Fade direction={"left"}>
            <ProfileBox>
              <article>
                <h2>Introduce.</h2>
                <ul>
                  <ol>
                    1. 현재 대구소프트웨어마이스터 고등학교에 재학 중입니다.
                    1학년 때부터 작은 토이프로젝트에서 크면 팀프로젝트 까지 여러
                    프로젝트를 진행했으며, <br />
                    <b>[기획, 개발, 유지/보수]</b> 등에 경험이 있습니다.
                  </ol>
                  <ol>
                    2. 나날이 발전하는 세상에서 새로운 스택을 배우며 응용 하는
                    것을 좋아합니다. 프로젝트를 진행할때 필요한 소통과 협업을
                    중요시합니다.
                  </ol>
                  <ol>
                    3. 협업을 하면서 코드의 가독성과 효율성, 리펙토링, 코드
                    스플릿 등과 같은 클린코딩에 대해 고민합니다.
                  </ol>
                  <ol>
                    4. 고민들이 자연스럽게 팀원들하고 이어져 소통하는 부분에서
                    즐거움을 느낍니다.
                  </ol>
                </ul>
              </article>
            </ProfileBox>
          </Fade>
          <Fade direction={"right"}>
            <ProfileBox>
              <div>
                <article>
                  <h1>이름 : 임동현</h1>
                  <h2>Connect.</h2>
                  <h3>📞 : 010-2797-3907</h3>
                  <h3>📧 : ldh165163@gmail.com</h3>
                  <h4
                    onClick={() =>
                      window.open("https://github.com/ldh3907", "_blank")
                    }
                  >
                    🐈‍⬛ : ldh3907
                  </h4>
                </article>
                <FaceImg alt="" />
              </div>
              <hr />
              <article>
                <h2>Techs.</h2>
                <ul>
                  <li>
                    1. JavaScript
                    <LanguageImg
                      src={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX33x4AAAD/5h+OgBF4bA7/6B/64h764R5dVAv23h65pxZkWgxJQgnt1h3cxxvWwRrNuRmhkRMUEgI1MAZyZw7kzhy/rBdPRwnEsRimlhTq0xyaixMxLAZNRgl7bw+FeBA/OQhWTQogHQSyoRUtKQWMfhEcGQNsYg0QDgImIwWklBStnRUICAGVhxIYFgMPifukAAAG3ElEQVR4nO2ca3uiOhRGIW2SohVtveNYb+1MO9b5/z/vgD3WC3tDgmAy57zrWx+VZpGQhGTvBAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4NFKCHlACKVcF4jgWMATjAqqhVRxa3e/6n+s1+vX5er+btMNUs2mi2yHmK0ecqym5aVUcvj7IcwznnWF0DcouSninihl+CbKfhZtH6kf7nneJdIfR9rwrthQRG+s3hcvQ3kjgVIqGCoxK/HLWESePI/2hiLuGwim9PyoRmtDOTXzy67ihaKtIf19hrbyoMOxNBTUAMEz1u4V7QxF20owDOdlw07zWBnKhaVg2lCdP4s2hmJjLZhOHlwrWhjqYQXBMBw5bqgWhpKfpxWSuO1tzA3VqJpgOHbbTs0NxY+KhuHGaTs1NlSTqoJh2HEg9o2xoRxXFlxEDsS+MTXUCW/wOljs3gbcfLzf/TueQ/HECLxPEykyZNSiOtuZ61UNU0O5ogVfguOShZKtz4uP50Pn0zZTw4gWnJ23QBGdV+PWg9UMQ0PVJQV/XT5iWs2Pn7Y7ziswMDdskYadXBXpaH34cORBBQbGhuKO+toL0Uvq+N/Pgr9rnUa8UF8bURLid/rJhyeLNIG54S/qa0OyGcpleOfR8r6hoSRf7um3Bt11PMafc5UhXYeBB4szJ1zVSideqTBc1dM8+TDelWFqSK5BLX163jhMDemJd8+fLpPFdE5DL2F8BP4/iYaGh5nKJXOPBj4G43d82jDsJ773Nte+H4Zhy2zX3xnG7/j8rui467Wj8ToN8yDuafvsaL7W9lqgGI4n3joaG4qSvd8fm8CrIJNvzNe8mZWa018lPlakxar+rlQxbPdcrx3msdldKzdMx8eN8GyAtDA03Hx6/h155WizByzJl0Tq5z45Wu3jR8+GiuEs8MbRyrBw2L9g48vYYRlt0jNXdL3ndMA2YshCMRx4EbxnHfVFb2DQPE88qEbryD2VfFg4vriPbLOPvlSRTejXo/OWWiVGWNrERj0nf8ke8PmPOjbVOHSrWMkw0HL000LR6bNYzTB9GhUXupDnOb+RekOqGmZ79iYB7XseXU7hqhumv9VPhhNVlyGY1xhmjq2lkWLXXW9znWEWQ9M1eadaumun1xpmjgkZxnAOueV/E643zJLY9LYsNLPv7EmswzC7jJiURBA724iryXD/QBZOdAauKrE2w8wxLnJ0FWRao2E2mevyWV+ummmthlnmHtuvVr7mldRsmL5acfHgK0cPYu2G/DrHf8YwEFva0FHEfgOGXFi/o7lpE4ZMaoajGDH7tTZdPrDRW42bZuuQu390SN6OM9Sy93Ff2mUIcgZncIxBdZSImcvTYZWcoUyyr5eO3ZLMpZ01OCBmUw2mEsWcKgx9u0XwddDAZ9n/s2wYVyOiLHRyR7ctQZUlbBGGSm7e//24LPWVDi9qqg7VYXiKqVpk0pmIdijjk/UK5nZ9X/UydaagYVzNsWBkoiOTR5G7G1/t4MimSFHTG1STJgzPCjYlSkV3NOHFt1Q+mKZIkUmn7dY/HqqLDYZ8f8okL7+efTEdIYg1iidWkdvWqN0vbaCX97JzqcjEHpz1JHJIn6Mw0HSrk8wm6rrumbcI8qHZPy9y5bhTPE4j1DV7FM1PKpZNsSeD3NfblWrZeqf+zWkwqJLcsvzpHLnooIhVT57FI2glY/bgDGoEukIw5rJ256PgkPK5YVccTu92UXpsWo+zWO/P+FJKSNHZFCQL1/vyJApOOfp8XOx2d4OC1fjz9sSvS3zxZ76YbTeb6V278GSeug/IKA8kLOBivFeFkaWm1D0a7lPkKrK+KIuyiBPiL1r7lE1Uv/G5XB9pvhnKUm8/k8HMnEzIX4yZ+VjQxN5ThdNyvqDStbTh8V4sjazRqGondbxSZdEd46hEkmZO/SoeyFjo+bEeki9EhjS1j8/k0BfDvfmpZF3+Y4Z11NQqm7A/cGXM3m0Vme3YEzQYFWUVK5nRL7jZWgwq+f3IvdHUqmjXUJfFzckqnu3AuOEURdWxaFsPZaGSIrE+hqdkRacGdNnE+Qj/1n68mhz9sfG7TSS0jMkl0VxhYqPC2MSzhdsbZdAoOSmdknyaF0ZEU6OB43N2w6wLJSaFZ1b2t9qmMEJNSuOg2hN1211tJTtTppdY7mLrlDMtVO+NbRjv7W3kIItNp5K92fmJXO+rRSuR1VI/lJDJaJY74ethselqd0l6+wPUo7jbG7Vave4w/UNcE0v/dSB7J+5NWimjXpzIK69YE1rtqe0EEq3qviIAAAAAAAAAgP8X/wAgtlS+S1NocAAAAABJRU5ErkJggg=="
                      }
                    />
                  </li>
                  <li>
                    2. React
                    <LanguageImg
                      src={
                        "https://media.vlpt.us/images/chez_bono/post/487c1fc1-4d58-4a97-aaaf-e0d1d91c0cb6/React.js_logo-512.png"
                      }
                    />
                  </li>
                  <li>
                    3. TypeScript
                    <LanguageImg
                      src={
                        "https://images.velog.io/post-images/dooreplay/d91b9b70-fdd4-11e9-971e-89fe6d75cd84/image.png"
                      }
                    />
                  </li>
                  <li>
                    4. Recoil
                    <LanguageImg
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvrjA_PzkstZU10nC0P4U-oEftikmU0gErKZBwrKMNDO3VwpOh7-lreryM-lzFR9eFdo&usqp=CAU"
                      }
                    />
                  </li>
                  <li>
                    5. HTML5/CSS3
                    <LanguageImg
                      src={
                        "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbVVdme%2Fbtq2iDRhLli%2FIKy8bQiJ57n1ql4XgMKyU1%2Fimg.jpg"
                      }
                    />
                  </li>
                  <li>
                    6. Styled-Components
                    <LanguageImg src={"https://i.ibb.co/ydkG6cv/img.png"} />
                  </li>
                </ul>
              </article>
            </ProfileBox>
          </Fade>
        </ProfileItemWrap>
      </ProfileBoxWrap>
    </ProfileContainer>
  );
};

export default ProfileForm;
