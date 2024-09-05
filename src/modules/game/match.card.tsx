import { InfoIcon } from '@/assets/icons/info.icon';
import { ButtonIcon } from '@/components/ui/button-icon';
import SwipeTag from './swipe-tags';
import { useMatchStore } from '@/shared/stores/match.store';
import { matchEvent } from '@/shared/events/app-events/match.event';

const MatchCard = () => {
  const { card } = useMatchStore();

  console.log(card);

  return (
    <div
      className="flex mx-1 min-h-screen h-full flex-col justify-center items-center overflow-hidden  ${
      isDragging"
    >
      <div className="text-3xl pb-10">Это метч!</div>
      <div
        id="cardsWrapper"
        className="w-full aspect-[100/170] max-w-[320px] xs:max-w-[420px] relative z-10"
      >
        <div className="h-[360px] w-full xs:h-[420px] relative">
          <div className="bg-slate-100 h-full w-full rounded-t-3xl overflow-hidden">
            <img
              className="h-full w-auto min-w-full object-cover"
              src={card?.image}
            />
          </div>
          <div className="absolute w-[90%] top-4 left-0 right-0 mx-auto flex justify-between items-center">
            <h3 className="py-2 px-4 rounded-3xl bg-white bg-opacity-80 backdrop-blur-sm">
              {card?.title.split(', ')[0]}
            </h3>
            <ButtonIcon
              variant="outline"
              className="bg-white bg-opacity-80 backdrop-blur-sm h-10 w-10"
            >
              <InfoIcon />
            </ButtonIcon>
          </div>
        </div>
        <div className="-translate-y-12 pt-4 h-52 w-full rounded-3xl bg-white shadow-md overflow-hidden">
          <div className="mx-4 flex flex-wrap gap-2">
            {card?.tags.map((el, index) => (
              <SwipeTag key={index}>{el.name}</SwipeTag>
            ))}
          </div>
          <p className="p-4">{card?.description}</p>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div
          onClick={() => {
            matchEvent.vote(card?.id ?? 0, 1);
          }}
          className="px-4 py-2 m-2 bg-white shadow-md rounded-full cursor-pointer"
        >
          Закончить
        </div>
        <div
          onClick={() => {
            matchEvent.vote(card?.id ?? 0, 0);
          }}
          className="px-4 py-2 m-2 bg-white shadow-md rounded-full cursor-pointer"
        >
          Продолжить
        </div>
      </div>
    </div>
  );
};

export default MatchCard;