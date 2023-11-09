export default function Badge(props: { value: string }) {
  const { value } = props;
  return (
    <span
      className={`line self-start text-xs text-red-500 sm:text-sm md:text-base lg:text-[0.5rem] lg:leading-4 2xl:text-xs`}
    >
      {value}
    </span>
  );
}
