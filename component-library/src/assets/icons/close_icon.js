import React from 'react';
import styled from 'styled-components';

const CloseIconWrapper = styled.svg `
    width: 100%;
    height: 100%;
`
export const CloseIcon = () => (
    <CloseIconWrapper aria-hidden="true">
            <path d="M18.722 3.1552L11.983 9.9528C11.707 10.2312 11.27 10.2312 11.017 9.9528L4.278 3.1552C4.002 2.8768 3.565 2.8768 3.312 3.1552C3.036 3.4336 3.036 3.8744 3.312 4.1296L10.051 10.9272C10.327 11.2056 10.327 11.6464 10.051 11.9016L3.289 18.7224C3.013 19.0008 3.013 19.4416 3.289 19.6968C3.565 19.9752 4.002 19.9752 4.255 19.6968L10.994 12.8992C11.27 12.6208 11.707 12.6208 11.96 12.8992L18.722 19.72C18.998 19.9984 19.435 19.9984 19.688 19.72C19.964 19.4416 19.964 19.0008 19.688 18.7456L12.972 11.9248C12.696 11.6464 12.696 11.2056 12.972 10.9504L19.711 4.1528C19.987 3.8744 19.987 3.4336 19.711 3.1784C19.435 2.9 18.998 2.9 18.722 3.1552Z" fill="black"/>
            <path d="M3.10791 29.3359C3.08024 29.7184 2.93864 30.0195 2.68311 30.2392C2.4292 30.459 2.09391 30.5688 1.67725 30.5688C1.22152 30.5688 0.86263 30.4158 0.600586 30.1098C0.340169 29.8022 0.209961 29.3807 0.209961 28.8452V28.6279C0.209961 28.2861 0.270182 27.985 0.390625 27.7246C0.511068 27.4642 0.68278 27.2648 0.905762 27.1264C1.13037 26.9865 1.39079 26.9165 1.68701 26.9165C2.09717 26.9165 2.42757 27.0264 2.67822 27.2461C2.92887 27.4658 3.07373 27.7742 3.11279 28.1714H2.38037C2.36247 27.9419 2.29818 27.7759 2.1875 27.6733C2.07845 27.5692 1.91162 27.5171 1.68701 27.5171C1.44287 27.5171 1.25977 27.605 1.1377 27.7807C1.01725 27.9549 0.955404 28.2259 0.952148 28.5937V28.8623C0.952148 29.2464 1.00993 29.5272 1.12549 29.7046C1.24268 29.882 1.4266 29.9707 1.67725 29.9707C1.90348 29.9707 2.07194 29.9194 2.18262 29.8169C2.29492 29.7127 2.35921 29.5524 2.37549 29.3359H3.10791ZM5.02686 28.54C4.93083 28.527 4.84619 28.5205 4.77295 28.5205C4.50602 28.5205 4.33105 28.6108 4.24805 28.7915V30.52H3.54248V27.8784H4.20898L4.22852 28.1933C4.37012 27.9508 4.56624 27.8296 4.81689 27.8296C4.89502 27.8296 4.96826 27.8402 5.03662 27.8613L5.02686 28.54ZM6.53564 30.5688C6.14827 30.5688 5.83252 30.45 5.58838 30.2124C5.34587 29.9748 5.22461 29.6582 5.22461 29.2627V29.1943C5.22461 28.929 5.27588 28.6922 5.37842 28.4839C5.48096 28.2739 5.62581 28.1128 5.81299 28.0005C6.00179 27.8865 6.21663 27.8296 6.45752 27.8296C6.81885 27.8296 7.10286 27.9435 7.30957 28.1714C7.5179 28.3992 7.62207 28.7223 7.62207 29.1406V29.4287H5.93994C5.96273 29.6012 6.03109 29.7396 6.14502 29.8437C6.26058 29.9479 6.40625 30 6.58203 30C6.85384 30 7.06624 29.9015 7.21924 29.7046L7.56592 30.0928C7.46012 30.2425 7.31689 30.3597 7.13623 30.4443C6.95557 30.5273 6.75537 30.5688 6.53564 30.5688ZM6.45508 28.4009C6.3151 28.4009 6.20117 28.4481 6.11328 28.5425C6.02702 28.6369 5.97168 28.772 5.94727 28.9477H6.92871V28.8916C6.92546 28.7353 6.88314 28.6149 6.80176 28.5303C6.72038 28.444 6.60482 28.4009 6.45508 28.4009ZM9.55566 30.52C9.52311 30.4565 9.49951 30.3776 9.48486 30.2832C9.31396 30.4736 9.0918 30.5688 8.81836 30.5688C8.55957 30.5688 8.34473 30.494 8.17383 30.3442C8.00456 30.1945 7.91992 30.0057 7.91992 29.7778C7.91992 29.4979 8.02327 29.283 8.22998 29.1333C8.43831 28.9835 8.73861 28.9079 9.13086 28.9062H9.45557V28.7549C9.45557 28.6328 9.42383 28.5351 9.36035 28.4619C9.2985 28.3887 9.20003 28.352 9.06494 28.352C8.94613 28.352 8.85254 28.3805 8.78418 28.4375C8.71745 28.4945 8.68408 28.5726 8.68408 28.6719H7.97852C7.97852 28.5189 8.02572 28.3773 8.12012 28.2471C8.21452 28.1168 8.34798 28.0151 8.52051 27.9419C8.69303 27.867 8.88672 27.8296 9.10156 27.8296C9.42708 27.8296 9.68506 27.9118 9.87549 28.0762C10.0675 28.2389 10.1636 28.4684 10.1636 28.7646V29.9097C10.1652 30.1603 10.2002 30.3499 10.2686 30.4785V30.52H9.55566ZM8.97217 30.0293C9.07633 30.0293 9.17236 30.0065 9.26025 29.9609C9.34814 29.9137 9.41325 29.8511 9.45557 29.7729V29.3188H9.19189C8.8387 29.3188 8.65072 29.4409 8.62793 29.685L8.62549 29.7265C8.62549 29.8144 8.65641 29.8869 8.71826 29.9438C8.78011 30.0008 8.86475 30.0293 8.97217 30.0293ZM11.5503 27.229V27.8784H12.002V28.396H11.5503V29.7143C11.5503 29.812 11.569 29.882 11.6064 29.9243C11.6439 29.9666 11.7155 29.9878 11.8213 29.9878C11.8994 29.9878 11.9686 29.9821 12.0288 29.9707V30.5054C11.8905 30.5477 11.748 30.5688 11.6016 30.5688C11.1068 30.5688 10.8545 30.319 10.8447 29.8193V28.396H10.459V27.8784H10.8447V27.229H11.5503ZM13.6108 30.5688C13.2235 30.5688 12.9077 30.45 12.6636 30.2124C12.4211 29.9748 12.2998 29.6582 12.2998 29.2627V29.1943C12.2998 28.929 12.3511 28.6922 12.4536 28.4839C12.5562 28.2739 12.701 28.1128 12.8882 28.0005C13.077 27.8865 13.2918 27.8296 13.5327 27.8296C13.894 27.8296 14.1781 27.9435 14.3848 28.1714C14.5931 28.3992 14.6973 28.7223 14.6973 29.1406V29.4287H13.0151C13.0379 29.6012 13.1063 29.7396 13.2202 29.8437C13.3358 29.9479 13.4814 30 13.6572 30C13.929 30 14.1414 29.9015 14.2944 29.7046L14.6411 30.0928C14.5353 30.2425 14.3921 30.3597 14.2114 30.4443C14.0308 30.5273 13.8306 30.5688 13.6108 30.5688ZM13.5303 28.4009C13.3903 28.4009 13.2764 28.4481 13.1885 28.5425C13.1022 28.6369 13.0469 28.772 13.0225 28.9477H14.0039V28.8916C14.0007 28.7353 13.9583 28.6149 13.877 28.5303C13.7956 28.444 13.68 28.4009 13.5303 28.4009ZM14.9902 29.1797C14.9902 28.7679 15.0822 28.4399 15.2661 28.1958C15.4517 27.9516 15.7048 27.8296 16.0254 27.8296C16.2826 27.8296 16.495 27.9256 16.6626 28.1177V26.77H17.3706V30.52H16.7334L16.6992 30.2392C16.5234 30.459 16.2972 30.5688 16.0205 30.5688C15.7096 30.5688 15.4598 30.4468 15.271 30.2026C15.0838 29.9569 14.9902 29.6159 14.9902 29.1797ZM15.6958 29.2309C15.6958 29.4783 15.7389 29.668 15.8252 29.7998C15.9115 29.9316 16.0368 29.9975 16.2012 29.9975C16.4193 29.9975 16.5731 29.9056 16.6626 29.7217V28.6792C16.5747 28.4953 16.4225 28.4033 16.2061 28.4033C15.8659 28.4033 15.6958 28.6792 15.6958 29.2309ZM2.65137 35.2236C2.65137 35.6468 2.56104 35.9772 2.38037 36.2148C2.19971 36.4508 1.94743 36.5688 1.62354 36.5688C1.33708 36.5688 1.1084 36.459 0.9375 36.2392L0.905762 36.52H0.270996V32.77H0.976562V34.1152C1.13932 33.9248 1.35335 33.8296 1.61865 33.8296C1.94092 33.8296 2.1932 33.9484 2.37549 34.186C2.55941 34.422 2.65137 34.7549 2.65137 35.1846V35.2236ZM1.9458 35.1723C1.9458 34.9054 1.90348 34.7109 1.81885 34.5889C1.73421 34.4652 1.60807 34.4033 1.44043 34.4033C1.21582 34.4033 1.0612 34.4953 0.976562 34.6792V35.7217C1.06283 35.9072 1.21908 36 1.44531 36C1.67318 36 1.82292 35.8877 1.89453 35.6631C1.92871 35.5556 1.9458 35.3921 1.9458 35.1723ZM4.04541 35.5215L4.53369 33.8784H5.29053L4.22852 36.9302L4.16992 37.0693C4.01204 37.4144 3.75163 37.5869 3.38867 37.5869C3.28613 37.5869 3.18197 37.5714 3.07617 37.5405V37.0058L3.18359 37.0083C3.31706 37.0083 3.41634 36.9879 3.48145 36.9473C3.54818 36.9066 3.60026 36.839 3.6377 36.7446L3.7207 36.5273L2.79541 33.8784H3.55469L4.04541 35.5215ZM8.17383 35.6387L8.97949 32.9653H9.79492L8.55713 36.52H7.79297L6.56006 32.9653H7.37305L8.17383 35.6387ZM10.8301 36.52H10.1221V33.8784H10.8301V36.52ZM10.0806 33.1948C10.0806 33.089 10.1156 33.0019 10.1855 32.9336C10.2572 32.8652 10.354 32.831 10.4761 32.831C10.5965 32.831 10.6925 32.8652 10.7642 32.9336C10.8358 33.0019 10.8716 33.089 10.8716 33.1948C10.8716 33.3022 10.835 33.3901 10.7617 33.4585C10.6901 33.5268 10.5949 33.561 10.4761 33.561C10.3573 33.561 10.2612 33.5268 10.188 33.4585C10.1164 33.3901 10.0806 33.3022 10.0806 33.1948ZM12.373 35.4604L12.1191 35.7143V36.52H11.4136V32.77H12.1191V34.8476L12.2559 34.6719L12.9321 33.8784H13.7793L12.8247 34.9795L13.8623 36.52H13.0518L12.373 35.4604ZM14.9292 33.229V33.8784H15.3809V34.396H14.9292V35.7143C14.9292 35.812 14.9479 35.882 14.9854 35.9243C15.0228 35.9666 15.0944 35.9878 15.2002 35.9878C15.2783 35.9878 15.3475 35.9821 15.4077 35.9707V36.5054C15.2694 36.5477 15.127 36.5688 14.9805 36.5688C14.4857 36.5688 14.2334 36.319 14.2236 35.8193V34.396H13.8379V33.8784H14.2236V33.229H14.9292ZM15.5908 35.1748C15.5908 34.9127 15.6413 34.6792 15.7422 34.4741C15.8431 34.269 15.988 34.1103 16.1768 33.998C16.3672 33.8857 16.5877 33.8296 16.8384 33.8296C17.1948 33.8296 17.4854 33.9386 17.71 34.1567C17.9362 34.3748 18.0623 34.671 18.0884 35.0454L18.0933 35.2261C18.0933 35.6313 17.9801 35.9569 17.7539 36.2026C17.5277 36.4468 17.2241 36.5688 16.8433 36.5688C16.4624 36.5688 16.158 36.4468 15.9302 36.2026C15.7039 35.9585 15.5908 35.6264 15.5908 35.2065V35.1748ZM16.2964 35.2261C16.2964 35.4767 16.3436 35.6688 16.438 35.8022C16.5324 35.9341 16.6675 36 16.8433 36C17.0142 36 17.1476 35.9349 17.2437 35.8047C17.3397 35.6728 17.3877 35.4629 17.3877 35.1748C17.3877 34.929 17.3397 34.7386 17.2437 34.6035C17.1476 34.4684 17.0125 34.4009 16.8384 34.4009C16.6659 34.4009 16.5324 34.4684 16.438 34.6035C16.3436 34.737 16.2964 34.9445 16.2964 35.2261ZM20.0122 34.54C19.9162 34.527 19.8315 34.5205 19.7583 34.5205C19.4914 34.5205 19.3164 34.6108 19.2334 34.7915V36.52H18.5278V33.8784H19.1943L19.2139 34.1933C19.3555 33.9508 19.5516 33.8296 19.8022 33.8296C19.8804 33.8296 19.9536 33.8402 20.022 33.8613L20.0122 34.54ZM1.63086 41.6387L2.43652 38.9653H3.25195L2.01416 42.52H1.25L0.0170898 38.9653H0.830078L1.63086 41.6387ZM3.32031 41.1748C3.32031 40.9127 3.37077 40.6792 3.47168 40.4741C3.57259 40.269 3.71745 40.1103 3.90625 39.998C4.09668 39.8857 4.31722 39.8296 4.56787 39.8296C4.92432 39.8296 5.21484 39.9386 5.43945 40.1567C5.66569 40.3748 5.79183 40.671 5.81787 41.0454L5.82275 41.2261C5.82275 41.6313 5.70964 41.9569 5.4834 42.2026C5.25716 42.4468 4.95361 42.5688 4.57275 42.5688C4.19189 42.5688 3.88753 42.4468 3.65967 42.2026C3.43343 41.9585 3.32031 41.6264 3.32031 41.2065V41.1748ZM4.02588 41.2261C4.02588 41.4767 4.07308 41.6688 4.16748 41.8022C4.26188 41.9341 4.39697 42 4.57275 42C4.74365 42 4.87712 41.9349 4.97314 41.8047C5.06917 41.6728 5.11719 41.4629 5.11719 41.1748C5.11719 40.929 5.06917 40.7386 4.97314 40.6035C4.87712 40.4684 4.74202 40.4009 4.56787 40.4009C4.39535 40.4009 4.26188 40.4684 4.16748 40.6035C4.07308 40.737 4.02588 40.9445 4.02588 41.2261ZM7.7417 40.54C7.64567 40.527 7.56104 40.5205 7.48779 40.5205C7.22087 40.5205 7.0459 40.6108 6.96289 40.7915V42.52H6.25732V39.8784H6.92383L6.94336 40.1933C7.08496 39.9508 7.28109 39.8296 7.53174 39.8296C7.60986 39.8296 7.68311 39.8402 7.75146 39.8613L7.7417 40.54ZM7.88574 41.1748C7.88574 40.9127 7.9362 40.6792 8.03711 40.4741C8.13802 40.269 8.28288 40.1103 8.47168 39.998C8.66211 39.8857 8.88265 39.8296 9.1333 39.8296C9.48975 39.8296 9.78027 39.9386 10.0049 40.1567C10.2311 40.3748 10.3573 40.671 10.3833 41.0454L10.3882 41.2261C10.3882 41.6313 10.2751 41.9569 10.0488 42.2026C9.82259 42.4468 9.51904 42.5688 9.13818 42.5688C8.75732 42.5688 8.45296 42.4468 8.2251 42.2026C7.99886 41.9585 7.88574 41.6264 7.88574 41.2065V41.1748ZM8.59131 41.2261C8.59131 41.4767 8.63851 41.6688 8.73291 41.8022C8.82731 41.9341 8.9624 42 9.13818 42C9.30908 42 9.44255 41.9349 9.53857 41.8047C9.6346 41.6728 9.68262 41.4629 9.68262 41.1748C9.68262 40.929 9.6346 40.7386 9.53857 40.6035C9.44255 40.4684 9.30745 40.4009 9.1333 40.4009C8.96077 40.4009 8.82731 40.4684 8.73291 40.6035C8.63851 40.737 8.59131 40.9445 8.59131 41.2261ZM13.2031 41.2236C13.2031 41.6468 13.1128 41.9772 12.9321 42.2148C12.7515 42.4508 12.4992 42.5688 12.1753 42.5688C11.8888 42.5688 11.6602 42.459 11.4893 42.2392L11.4575 42.52H10.8228V38.77H11.5283V40.1152C11.6911 39.9248 11.9051 39.8296 12.1704 39.8296C12.4927 39.8296 12.745 39.9484 12.9272 40.186C13.1112 40.422 13.2031 40.7549 13.2031 41.1846V41.2236ZM12.4976 41.1723C12.4976 40.9054 12.4552 40.7109 12.3706 40.5889C12.286 40.4652 12.1598 40.4033 11.9922 40.4033C11.7676 40.4033 11.613 40.4953 11.5283 40.6792V41.7217C11.6146 41.9072 11.7708 42 11.9971 42C12.2249 42 12.3747 41.8877 12.4463 41.6631C12.4805 41.5556 12.4976 41.3921 12.4976 41.1723ZM14.5972 41.5215L15.0854 39.8784H15.8423L14.7803 42.9302L14.7217 43.0693C14.5638 43.4144 14.3034 43.5869 13.9404 43.5869C13.8379 43.5869 13.7337 43.5714 13.6279 43.5405V43.0058L13.7354 43.0083C13.8688 43.0083 13.9681 42.9879 14.0332 42.9473C14.0999 42.9066 14.152 42.839 14.1895 42.7446L14.2725 42.5273L13.3472 39.8784H14.1064L14.5972 41.5215ZM17.3022 42.5688C16.9149 42.5688 16.5991 42.45 16.355 42.2124C16.1125 41.9748 15.9912 41.6582 15.9912 41.2627V41.1943C15.9912 40.929 16.0425 40.6922 16.145 40.4839C16.2476 40.2739 16.3924 40.1128 16.5796 40.0005C16.7684 39.8865 16.9832 39.8296 17.2241 39.8296C17.5854 39.8296 17.8695 39.9435 18.0762 40.1714C18.2845 40.3992 18.3887 40.7223 18.3887 41.1406V41.4287H16.7065C16.7293 41.6012 16.7977 41.7396 16.9116 41.8437C17.0272 41.9479 17.1729 42 17.3486 42C17.6204 42 17.8328 41.9015 17.9858 41.7046L18.3325 42.0928C18.2267 42.2425 18.0835 42.3597 17.9028 42.4443C17.7222 42.5273 17.522 42.5688 17.3022 42.5688ZM17.2217 40.4009C17.0817 40.4009 16.9678 40.4481 16.8799 40.5425C16.7936 40.6369 16.7383 40.772 16.7139 40.9477H17.6953V40.8916C17.6921 40.7353 17.6497 40.6149 17.5684 40.5303C17.487 40.444 17.3714 40.4009 17.2217 40.4009ZM19.7461 41.6582L20.2368 39.8784H20.9741L20.083 42.52H19.4092L18.5181 39.8784H19.2554L19.7461 41.6582Z" fill="black"/>
            <path d="M0.463867 31.68V29.556H0.0708008V29.0384H0.463867V28.8138C0.463867 28.5176 0.548503 28.2881 0.717773 28.1253C0.888672 27.9609 1.12712 27.8787 1.43311 27.8787C1.53076 27.8787 1.65039 27.895 1.79199 27.9276L1.78467 28.4744C1.72607 28.4598 1.65446 28.4525 1.56982 28.4525C1.30452 28.4525 1.17188 28.577 1.17188 28.826V29.0384H1.69678V29.556H1.17188V31.68H0.463867ZM3.54736 29.7C3.45133 29.687 3.3667 29.6805 3.29346 29.6805C3.02653 29.6805 2.85156 29.7708 2.76855 29.9515V31.68H2.06299V29.0384H2.72949L2.74902 29.3533C2.89062 29.1108 3.08675 28.9896 3.3374 28.9896C3.41553 28.9896 3.48877 29.0001 3.55713 29.0213L3.54736 29.7ZM3.69141 30.3348C3.69141 30.0727 3.74186 29.8392 3.84277 29.6341C3.94368 29.429 4.08854 29.2703 4.27734 29.158C4.46777 29.0457 4.68831 28.9896 4.93896 28.9896C5.29541 28.9896 5.58594 29.0986 5.81055 29.3167C6.03678 29.5348 6.16292 29.831 6.18896 30.2054L6.19385 30.386C6.19385 30.7913 6.08073 31.1168 5.85449 31.3626C5.62826 31.6068 5.32471 31.7288 4.94385 31.7288C4.56299 31.7288 4.25863 31.6068 4.03076 31.3626C3.80452 31.1185 3.69141 30.7864 3.69141 30.3665V30.3348ZM4.39697 30.386C4.39697 30.6367 4.44417 30.8288 4.53857 30.9622C4.63298 31.0941 4.76807 31.16 4.94385 31.16C5.11475 31.16 5.24821 31.0949 5.34424 30.9647C5.44027 30.8328 5.48828 30.6229 5.48828 30.3348C5.48828 30.089 5.44027 29.8986 5.34424 29.7635C5.24821 29.6284 5.11312 29.5609 4.93896 29.5609C4.76644 29.5609 4.63298 29.6284 4.53857 29.7635C4.44417 29.897 4.39697 30.1045 4.39697 30.386ZM7.29004 29.0384L7.31201 29.3338C7.49919 29.1043 7.75228 28.9896 8.07129 28.9896C8.41146 28.9896 8.64502 29.1238 8.77197 29.3924C8.95752 29.1238 9.22201 28.9896 9.56543 28.9896C9.85189 28.9896 10.0651 29.0734 10.2051 29.241C10.3451 29.407 10.415 29.6577 10.415 29.993V31.68H9.70703V29.9954C9.70703 29.8457 9.67773 29.7366 9.61914 29.6683C9.56055 29.5983 9.45719 29.5633 9.30908 29.5633C9.09749 29.5633 8.95101 29.6642 8.86963 29.866L8.87207 31.68H8.1665V29.9979C8.1665 29.8449 8.13639 29.7342 8.07617 29.6658C8.01595 29.5975 7.91341 29.5633 7.76855 29.5633C7.56836 29.5633 7.4235 29.6463 7.33398 29.8123V31.68H6.62842V29.0384H7.29004ZM13.0493 28.389V29.0384H13.501V29.556H13.0493V30.8743C13.0493 30.972 13.068 31.042 13.1055 31.0843C13.1429 31.1266 13.2145 31.1478 13.3203 31.1478C13.3984 31.1478 13.4676 31.1421 13.5278 31.1307V31.6653C13.3895 31.7077 13.2471 31.7288 13.1006 31.7288C12.6058 31.7288 12.3535 31.479 12.3438 30.9793V29.556H11.958V29.0384H12.3438V28.389H13.0493ZM14.5825 29.3265C14.7697 29.1019 15.0049 28.9896 15.2881 28.9896C15.861 28.9896 16.1515 29.3224 16.1597 29.9881V31.68H15.4541V30.0076C15.4541 29.8563 15.4215 29.7448 15.3564 29.6732C15.2913 29.5999 15.1831 29.5633 15.0317 29.5633C14.825 29.5633 14.6753 29.643 14.5825 29.8026V31.68H13.877V27.93H14.5825V29.3265ZM17.9077 31.7288C17.5203 31.7288 17.2046 31.61 16.9604 31.3724C16.7179 31.1347 16.5967 30.8182 16.5967 30.4227V30.3543C16.5967 30.089 16.6479 29.8522 16.7505 29.6439C16.853 29.4339 16.9979 29.2728 17.1851 29.1605C17.3739 29.0465 17.5887 28.9896 17.8296 28.9896C18.1909 28.9896 18.4749 29.1035 18.6816 29.3314C18.89 29.5592 18.9941 29.8823 18.9941 30.3006V30.5887H17.312C17.3348 30.7612 17.4032 30.8996 17.5171 31.0037C17.6326 31.1079 17.7783 31.16 17.9541 31.16C18.2259 31.16 18.4383 31.0615 18.5913 30.8646L18.938 31.2527C18.8322 31.4025 18.689 31.5197 18.5083 31.6043C18.3276 31.6873 18.1274 31.7288 17.9077 31.7288ZM17.8271 29.5609C17.6872 29.5609 17.5732 29.6081 17.4854 29.7025C17.3991 29.7969 17.3438 29.9319 17.3193 30.1077H18.3008V30.0516C18.2975 29.8953 18.2552 29.7749 18.1738 29.6902C18.0924 29.604 17.9769 29.5609 17.8271 29.5609ZM3.20801 37.68H2.47559L1.0498 35.3411V37.68H0.317383V34.1253H1.0498L2.47803 36.4691V34.1253H3.20801V37.68ZM3.69141 36.3348C3.69141 36.0727 3.74186 35.8392 3.84277 35.6341C3.94368 35.429 4.08854 35.2703 4.27734 35.158C4.46777 35.0457 4.68831 34.9896 4.93896 34.9896C5.29541 34.9896 5.58594 35.0986 5.81055 35.3167C6.03678 35.5348 6.16292 35.831 6.18896 36.2054L6.19385 36.386C6.19385 36.7913 6.08073 37.1168 5.85449 37.3626C5.62826 37.6068 5.32471 37.7288 4.94385 37.7288C4.56299 37.7288 4.25863 37.6068 4.03076 37.3626C3.80452 37.1185 3.69141 36.7864 3.69141 36.3665V36.3348ZM4.39697 36.386C4.39697 36.6367 4.44417 36.8288 4.53857 36.9622C4.63298 37.0941 4.76807 37.16 4.94385 37.16C5.11475 37.16 5.24821 37.0949 5.34424 36.9647C5.44027 36.8328 5.48828 36.6229 5.48828 36.3348C5.48828 36.089 5.44027 35.8986 5.34424 35.7635C5.24821 35.6284 5.11312 35.5609 4.93896 35.5609C4.76644 35.5609 4.63298 35.6284 4.53857 35.7635C4.44417 35.897 4.39697 36.1045 4.39697 36.386ZM8.21045 37.4114C8.0363 37.623 7.79541 37.7288 7.48779 37.7288C7.20459 37.7288 6.98812 37.6474 6.83838 37.4847C6.69027 37.3219 6.61458 37.0835 6.61133 36.7693V35.0384H7.31689V36.7449C7.31689 37.02 7.44222 37.1575 7.69287 37.1575C7.93213 37.1575 8.09652 37.0745 8.18604 36.9085V35.0384H8.89404V37.68H8.22998L8.21045 37.4114ZM10.0757 35.0384L10.0977 35.3436C10.2865 35.1076 10.5396 34.9896 10.8569 34.9896C11.1369 34.9896 11.3452 35.0718 11.4819 35.2361C11.6187 35.4005 11.6886 35.6463 11.6919 35.9734V37.68H10.9863V35.9905C10.9863 35.8408 10.9538 35.7326 10.8887 35.6658C10.8236 35.5975 10.7153 35.5633 10.564 35.5633C10.3654 35.5633 10.2165 35.6479 10.1172 35.8172V37.68H9.41162V35.0384H10.0757ZM1.0498 42.4276V43.68H0.317383V40.1253H1.7041C1.97103 40.1253 2.2054 40.1741 2.40723 40.2718C2.61068 40.3694 2.76693 40.5086 2.87598 40.6893C2.98503 40.8683 3.03955 41.0726 3.03955 41.3021C3.03955 41.6504 2.91992 41.9254 2.68066 42.1273C2.44303 42.3275 2.11344 42.4276 1.69189 42.4276H1.0498ZM1.0498 41.8343H1.7041C1.89779 41.8343 2.04508 41.7887 2.146 41.6976C2.24854 41.6064 2.2998 41.4762 2.2998 41.3069C2.2998 41.1328 2.24854 40.992 2.146 40.8846C2.04346 40.7772 1.90186 40.7218 1.72119 40.7186H1.0498V41.8343ZM4.98291 41.7C4.88688 41.687 4.80225 41.6805 4.729 41.6805C4.46208 41.6805 4.28711 41.7708 4.2041 41.9515V43.68H3.49854V41.0384H4.16504L4.18457 41.3533C4.32617 41.1108 4.5223 40.9896 4.77295 40.9896C4.85107 40.9896 4.92432 41.0001 4.99268 41.0213L4.98291 41.7ZM5.12695 42.3348C5.12695 42.0727 5.17741 41.8392 5.27832 41.6341C5.37923 41.429 5.52409 41.2703 5.71289 41.158C5.90332 41.0457 6.12386 40.9896 6.37451 40.9896C6.73096 40.9896 7.02148 41.0986 7.24609 41.3167C7.47233 41.5348 7.59847 41.831 7.62451 42.2054L7.62939 42.386C7.62939 42.7913 7.51628 43.1168 7.29004 43.3626C7.0638 43.6068 6.76025 43.7288 6.37939 43.7288C5.99854 43.7288 5.69417 43.6068 5.46631 43.3626C5.24007 43.1185 5.12695 42.7864 5.12695 42.3665V42.3348ZM5.83252 42.386C5.83252 42.6367 5.87972 42.8288 5.97412 42.9622C6.06852 43.0941 6.20361 43.16 6.37939 43.16C6.55029 43.16 6.68376 43.0949 6.77979 42.9647C6.87581 42.8328 6.92383 42.6229 6.92383 42.3348C6.92383 42.089 6.87581 41.8986 6.77979 41.7635C6.68376 41.6284 6.54867 41.5609 6.37451 41.5609C6.20199 41.5609 6.06852 41.6284 5.97412 41.7635C5.87972 41.897 5.83252 42.1045 5.83252 42.386ZM8.81104 41.0384V43.824C8.81104 44.1154 8.73372 44.3416 8.5791 44.5027C8.42448 44.6655 8.2015 44.7469 7.91016 44.7469C7.78809 44.7469 7.67171 44.7331 7.56104 44.7054V44.1463C7.64567 44.1609 7.71973 44.1683 7.7832 44.1683C7.99642 44.1683 8.10303 44.0552 8.10303 43.8289V41.0384H8.81104ZM8.04688 40.3548C8.04688 40.249 8.08187 40.1619 8.15186 40.0936C8.22347 40.0252 8.32031 39.991 8.44238 39.991C8.56445 39.991 8.66048 40.0252 8.73047 40.0936C8.80208 40.1619 8.83789 40.249 8.83789 40.3548C8.83789 40.4622 8.80127 40.5501 8.72803 40.6185C8.65641 40.6868 8.5612 40.721 8.44238 40.721C8.32357 40.721 8.22754 40.6868 8.1543 40.6185C8.08268 40.5501 8.04688 40.4622 8.04688 40.3548ZM10.5786 43.7288C10.1912 43.7288 9.87549 43.61 9.63135 43.3724C9.38883 43.1347 9.26758 42.8182 9.26758 42.4227V42.3543C9.26758 42.089 9.31885 41.8522 9.42139 41.6439C9.52393 41.4339 9.66878 41.2728 9.85596 41.1605C10.0448 41.0465 10.2596 40.9896 10.5005 40.9896C10.8618 40.9896 11.1458 41.1035 11.3525 41.3314C11.5609 41.5592 11.665 41.8823 11.665 42.3006V42.5887H9.98291C10.0057 42.7612 10.0741 42.8996 10.188 43.0037C10.3035 43.1079 10.4492 43.16 10.625 43.16C10.8968 43.16 11.1092 43.0615 11.2622 42.8646L11.6089 43.2527C11.5031 43.4025 11.3599 43.5197 11.1792 43.6043C10.9985 43.6873 10.7983 43.7288 10.5786 43.7288ZM10.498 41.5609C10.3581 41.5609 10.2441 41.6081 10.1562 41.7025C10.07 41.7969 10.0146 41.9319 9.99023 42.1077H10.9717V42.0516C10.9684 41.8953 10.9261 41.7749 10.8447 41.6902C10.7633 41.604 10.6478 41.5609 10.498 41.5609ZM13.1665 43.16C13.2967 43.16 13.4025 43.1242 13.4839 43.0526C13.5653 42.9809 13.6076 42.8857 13.6108 42.7669H14.2725C14.2708 42.9459 14.222 43.1103 14.126 43.2601C14.0299 43.4082 13.8981 43.5237 13.7305 43.6068C13.5645 43.6881 13.3805 43.7288 13.1787 43.7288C12.8011 43.7288 12.5033 43.6092 12.2852 43.3699C12.0671 43.129 11.958 42.797 11.958 42.3738V42.3275C11.958 41.9206 12.0662 41.5958 12.2827 41.3533C12.4992 41.1108 12.7962 40.9896 13.1738 40.9896C13.5042 40.9896 13.7687 41.084 13.9673 41.2728C14.1675 41.4599 14.2692 41.7098 14.2725 42.0223H13.6108C13.6076 41.8856 13.5653 41.7749 13.4839 41.6902C13.4025 41.604 13.2951 41.5609 13.1616 41.5609C12.9972 41.5609 12.8727 41.6211 12.7881 41.7415C12.7051 41.8603 12.6636 42.054 12.6636 42.3226V42.3958C12.6636 42.6676 12.7051 42.8629 12.7881 42.9818C12.8711 43.1006 12.9972 43.16 13.1665 43.16ZM15.52 40.389V41.0384H15.9717V41.556H15.52V42.8743C15.52 42.972 15.5387 43.042 15.5762 43.0843C15.6136 43.1266 15.6852 43.1478 15.791 43.1478C15.8691 43.1478 15.9383 43.1421 15.9985 43.1307V43.6653C15.8602 43.7077 15.7178 43.7288 15.5713 43.7288C15.0765 43.7288 14.8242 43.479 14.8145 42.9793V41.556H14.4287V41.0384H14.8145V40.389H15.52Z" fill="black"/>
    </CloseIconWrapper>
);