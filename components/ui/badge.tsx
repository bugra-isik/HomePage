export default function Badge(props: { value: string }) {
  const { value } = props;
  return (
    <span
      className={`self-start text-xs text-red-500 sm:text-sm md:text-base lg:text-[0.5rem] lg:leading-4 line 2xl:text-xs`}
    >
      {value}
    </span>
  );
}
