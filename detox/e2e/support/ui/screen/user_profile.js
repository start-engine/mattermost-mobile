// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {SettingsSidebar} from '@support/ui/component';

class UserProfileScreen {
    testID = {
        userProfileScreen: 'user_profile.screen',
        customStatus: 'user_profile.custom_status',
        profilePicture: 'user_profile.profile_picture',
        closeUserProfileButton: 'close.settings.button',
        userProfileScrollView: 'user_profile.scroll_view',
        emailLabel: 'user_profile.display_block.email.label',
        emailValue: 'user_profile.display_block.email.value',
        firstNameLabel: 'user_profile.display_block.first_name.label',
        firstNameValue: 'user_profile.display_block.first_name.value',
        lastNameLabel: 'user_profile.display_block.last_name.label',
        lastNameValue: 'user_profile.display_block.last_name.value',
        nicknameLabel: 'user_profile.display_block.nickname.label',
        nicknameValue: 'user_profile.display_block.nickname.value',
        positionLabel: 'user_profile.display_block.position.label',
        positionValue: 'user_profile.display_block.position.value',
        localTimeLabel: 'user_profile.timezone_block.local_time.label',
        localTimeValue: 'user_profile.timezone_block.local_time.value',
        additionalOptionsAction: 'user_profile.additional_options.action',
        sendMessageAction: 'user_profile.send_message.action',
    }

    userProfileScreen = element(by.id(this.testID.userProfileScreen));
    userProfileScrollView = element(by.id(this.testID.userProfileScrollView));
    customStatus = element(by.id(this.testID.customStatus));
    profilePicture = element(by.id(this.testID.profilePicture))
    closeUserProfileButton = element(by.id(this.testID.closeUserProfileButton))
    emailLabel = element(by.id(this.testID.emailLabel));
    emailValue = element(by.id(this.testID.emailValue));
    firstNameLabel = element(by.id(this.testID.firstNameLabel));
    firstNameValue = element(by.id(this.testID.firstNameValue));
    lastNameLabel = element(by.id(this.testID.lastNameLabel));
    lastNameValue = element(by.id(this.testID.lastNameValue));
    nicknameLabel = element(by.id(this.testID.nicknameLabel));
    nicknameValue = element(by.id(this.testID.nicknameValue));
    positionLabel = element(by.id(this.testID.positionLabel));
    positionValue = element(by.id(this.testID.positionValue));
    localTimeLabel = element(by.id(this.testID.localTimeLabel));
    localTimeValue = element(by.id(this.testID.localTimeValue));
    additionalOptionsAction = element(by.id(this.testID.additionalOptionsAction));
    sendMessageAction = element(by.id(this.testID.sendMessageAction));

    toBeVisible = async () => {
        await expect(this.userProfileScreen).toBeVisible();

        return this.userProfileScreen;
    }

    open = async () => {
        // # Open custom status screen
        await SettingsSidebar.userInfoAction.tap();

        return this.toBeVisible();
    }

    close = async () => {
        await this.closeUserProfileButton.tap();
        return expect(this.userProfileScreen).not.toBeVisible();
    }
}

const userProfileScreen = new UserProfileScreen();
export default userProfileScreen;
