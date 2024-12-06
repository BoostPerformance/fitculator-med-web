import Title from '../title';

export default function RegisterItemTitle({
  title,
  required,
}: {
  title: string;
  required: boolean;
}) {
  return (
    <>
      <Title required={required} title={title} />
    </>
  );
}
