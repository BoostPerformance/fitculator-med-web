export default function ExerciseGuideline() {
  return (
    <>
      <div className=" bg-gray-8 relative m-[0.5rem] w-[47rem] rounded-[0.625rem] p-[2rem] text-left inset-0 sm:flex sm:flex-col sm:items-end sm:overflow-y-auto sm:w-[21rem] sm:h-auto sm:p-[1rem]">
        <div className="w-[42.875rem] flex flex-col items-center gap-[0.625rem] text-gray-6 sm:w-auto">
          <div>
            <p className="text-1-500 sm:text-0.75-500">
              핏큘레이터는 세계보건기구(WHO)의 글로벌 신체활동{' '}
              <br className="hidden sm:inline" />
              가이드라인을 기반으로 한 운동량 계산 서비스를 제공합니다.{' '}
              <br className="hidden sm:inline" />
              기본적인 건강을 유지하기 위해서는 일정 수준의 유산소 운동이 꼭
              필요합니다. 이를 쉽게 이해하고 실천할 수 있도록, 저희는{' '}
              <br className="hidden sm:inline" />
              운동량을 &apos;포인트&apos;로 환산하여 관리할 수 있는 시스템을
              <br className="hidden sm:inline" />
              만들었습니다.
            </p>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h1 className="text-1.125-700 sm:text-0.875-700 ">유산소 Point</h1>
            <li className="sm:text-0.75-500">
              100 포인트 / 1주: 기본적인 건강을 유지하기 위한 운동량입니다.
              일주일 동안 이 포인트를 채우면, WHO가 권장하는 최소한의 신체활동을
              실천한 것으로 볼 수 있습니다.
            </li>
            <li className="sm:text-0.75-500">
              200 포인트 / 1주: 추가적인 건강 혜택을 위한 목표입니다. 일주일
              동안 이 포인트를 달성하면, 심혈관 건강, 체력 증진 등 더 많은
              건강상의 이점을 얻을 수 있습니다.
            </li>
            <div className="text-1-500 sm:text-0.75-500">
              Tip: 40분 달리기로 약 25 Point를 쌓을 수 있어요.
              <br />
              같은 시간을 운동해도 운동강도가 높을 수록 높은 포인트를 얻어요.
            </div>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h1 className="text-1.125-700 sm:text-0.875-700">근력운동</h1>
            <div>
              <p className="text-1-500 sm:text-0.75-500">
                주 2회 이상 근력운동을 해야 합니다. 한 번의&nbsp;
                <u>근력운동이 30분 이상이어야 1회</u>로 인정됩니다.
              </p>
            </div>
            <div>
              <p className="text-1-500 sm:text-0.75-500">
                30분 미만의 근력운동은 효과가 충분하지 않다고 보기 때문에 1회로
                인정되지 않습니다. 제대로 된 효과를 얻기 위해서는 최소 30분 이상
                근력운동을 꾸준히 실천하는 것이 중요합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
