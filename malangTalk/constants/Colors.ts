/**
 * Below are the colors that are used in the app.
 * The colors are defined separately for light and dark mode.
 *
 * There are many other ways to style your app.
 * For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

/**
 * Defines the color palette for the app, separated by light and dark mode.
 *
 * Usage:
 *   Colors.light.text
 *   Colors.dark.background
 */
export const Colors = {
  light: {
    /** 일반 텍스트 색상 */
    text: '#11181C',
    /** 화면 배경 색상 */
    background: '#ffffff',
    /** 메인 포인트 컬러 */
    tint: tintColorLight,
    /** 아이콘 색상 */
    icon: '#687076',
    /** 탭 아이콘 비활성 상태 색상 */
    tabIconDefault: '#687076',

    /** 탭 아이콘 선택 상태 색상 */
    tabIconSelected: tintColorLight,
    /** 큰 제목용 텍스트 색상 */
    title_text: '#111827',
    /** 서브타이틀 텍스트 색상 */
    subTitle_text: '#4B5563',
    /** 플레이스홀더 텍스트 색상 */
    placehorder_text: '#4B5563',
    /** 인포 텍스트 색상 추가적인 정보 표시 텍스트*/
    info_text: '#6B7280',
    /** 본문/콘텐츠 텍스트 색상 */
    content_text: '#4B5563',
    /** 카드/컨테이너 배경 색상 */
    card_background: '#F9FAFB',
    /** 강조 색상 (hover 전) */
    title_color_light: '#DBEAFE',
    /** 메인 강조 색상 #3B82F6*/
    title_color_default: '#3B82F6',
    /** 강조 색상 hover 상태 */
    title_color_hover: '#2563EB',
    /** 흰색 */
    white: '#ffffff',
    /** 테두리 색상 */
    input_border: '#e5e7eb',
    /** 구분선 색상 */
    seperate_line: '#e5e7eb',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    title_text: '#ECEDEE',
    subTitle_text: '#9BA1A6',
    content_text: '#9BA1A6',
    card_background: '#1F2937',
    title_color_light: '#3B82F6',
    title_color_default: '#2563EB',
    title_color_hover: '#1D4ED8',
    white: '#ffffff',
    placehorder_text: '#4B5563',
    input_border: '#e5e7eb',
  },
};
