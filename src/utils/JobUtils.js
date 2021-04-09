module.exports = {
    remainingDays(job) {
        const remainingDays = (
            job["total-hours"] / job["daily-hours"]
        ).toFixed();

        const createdDate = new Date(job.created_at);
        const dueDay = createdDate.getDate() + Number(remainingDays);
        const dueDate = createdDate.setDate(dueDay);

        const timeDiffInMs = dueDate - Date.now();

        const dayInsMs = 1000 * 60 * 60 * 24;
        const dayDiff = Math.ceil(timeDiffInMs / dayInsMs);

        return dayDiff;
    },
    calculateBudget: (job, valueHour) => {
        return Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
        }).format(valueHour * job["total-hours"]);
    },
};
