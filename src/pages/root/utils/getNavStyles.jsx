export default function getNavStyles(isActive, isFirstLoad) {
  let styles = 'hover:text-white text-slate-200 relative '

  if (isActive) {
    styles +=
      'after:content-[""] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:bg-brandHighlight '

    if (!isFirstLoad) {
      styles += 'after:animate-[increasingSize_400ms] '
    }
  }

  return styles
}
