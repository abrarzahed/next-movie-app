export default function HeaderIcon({ Icon, title }) {
  return (
    <div className="flex space-y-2 flex-col justify-center">
      <Icon className="h-7" />
      <p className="font-medium text-xs uppercase">{title}</p>
    </div>
  );
}
