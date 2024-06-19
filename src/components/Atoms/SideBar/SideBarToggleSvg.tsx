interface SideBarToggleSvgProps {
  isOpen: boolean;
}

export default function SidebarToggleSvg({ isOpen, ...props }: SideBarToggleSvgProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
      <path d='M21,16H3v-2h18V16z M21,11H3V9h18V11z M21,6H3V4h18V6z' strokeWidth='2' />
    </svg>
  );
}
