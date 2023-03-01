import React from 'react'
import styles from '../styles.js'

const EmailUpdates = () => {
  return (
    <section className="py-28 bg-primary ">
      <div
        className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter} flex-col m-auto`}
      >
        <div className="mb-4 after:w-8 after:h-px after:bg-dimLightGrey after:block before:w-8 before:h-px before:bg-dimLightGrey before:block flex flex-row items-center justify-center gap-4 ">
          <h2 className="text-secondary uppercase text-base text-center">
            Sign up and get free coffee bags
          </h2>
        </div>
        <span className="block text-4xl text-secondary mb-7">Coffee Updates</span>
        <form className='flex flex-row gap-4' action="" method="get">
          <div class="formEmail">
            <input type="email" name="email" id="email" required />
          </div>
          <div class="formButton bg-secondary mb-4">
            <input type="submit" value="Subscribe! " />
          </div>
        </form>
      </div>
    </section>
  )
}

export default EmailUpdates
