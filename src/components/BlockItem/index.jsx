import { TagItem } from '../TagItem';

export function BlockItem({
  title,
  subtitle,
  description,
  startDate,
  endDate,
}) {
  const COMPLETE_DATE_STRING = `${startDate} / ${endDate}`
  const TAG_TEXT = endDate ? COMPLETE_DATE_STRING : startDate;

  return (
    <div className='item'>
      <div className='is-size-5'>
        <b>{title}</b>
        <b className='ml-1'>-</b>
        <span className='has-text-weight-semi-bold ml-1'>
          <i>{subtitle}</i>
        </span>
      </div>
      <TagItem text={TAG_TEXT}></TagItem>
      <div className='py-2'>{description}</div>
    </div>
  );
}
