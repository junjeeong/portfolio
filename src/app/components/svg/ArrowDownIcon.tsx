const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className="absolute bottom-0 w-16 h-16 text-white -translate-x-[50%] left-[48.5%] fadein-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 48"
        fill="currentColor"
        className="w-6 h-12"
        {...props}
      >
        {/* 첫 번째 화살표 (위쪽) */}
        <path
          fillRule="evenodd"
          d="M12.53 16.28a.75.75 0 0 1-1.06 0L3.97 8.78A.75.75 0 0 1 5.03 7.72L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
          clipRule="evenodd"
        />

        {/* 두 번째 화살표 (아래쪽, Y축 12px 아래로 이동) */}
        <path
          fillRule="evenodd"
          transform="translate(0, 12)"
          d="M12.53 16.28a.75.75 0 0 1-1.06 0L3.97 8.78A.75.75 0 0 1 5.03 7.72L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default ArrowDownIcon;
