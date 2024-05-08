<?php

namespace Drupal\i2_flood_notif_via_cronjob\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure user settings for this site.
 *
 * @internal
 */
class sSettingsForm extends ConfigFormBase
{

    /**
     * {@inheritdoc}
     */
    public function getFormId()
    {
        return 'i2_flood_notif_via_cronjob_settings';
    }

    /**
     * {@inheritdoc}
     */
    protected function getEditableConfigNames()
    {
        return [
            'i2_flood_notif_via_cronjob.settings',
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(array $form, FormStateInterface $form_state)
    {
        $form = parent::buildForm($form, $form_state);
        $_config = $this->config('i2_flood_notif_via_cronjob.settings');

        $form['admin_email_for_notif'] = [
            '#type' => 'email',
            '#title' => $this->t('Notification will be sent to...'),
            '#default_value' => $_config->get('admin_email_for_notif'),
            '#maxlength' => 30,
        ];
        $form['count_of_fail_for_notif'] = [
            '#type' => 'number',
            '#title' => $this->t('Count of Fail(s) for Notification'),
            '#default_value' => $_config->get('count_of_fail_for_notif'),
            '#maxlength' => 10,
        ];

        return $form;
    }


    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state)
    {
        parent::submitForm($form, $form_state);
        $this->config('i2_flood_notif_via_cronjob.settings')
            ->set('admin_email_for_notif', $form_state->getValue('admin_email_for_notif'))
            ->set('count_of_fail_for_notif', $form_state->getValue('count_of_fail_for_notif'))
            ->save();
    }
}
