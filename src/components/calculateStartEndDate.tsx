const CalculateStartEndDate = (
  period: number
): {
  start_date: string;
  end_date: string;
} => {
  const today = new Date();

  const start_date = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  const end_date = new Date(start_date);
  end_date.setMonth(start_date.getMonth() + period);

  return {
    start_date: start_date.toLocaleString(),
    end_date: end_date.toLocaleString(),
  };
};

export default CalculateStartEndDate;
